#!/usr/bin/env node
/**
 * One-shot image optimizer. Re-encodes oversized PNG/JPG sources in /public
 * down to a sensible resolution and quality, preserving filenames so that
 * existing imports keep working. next/image still does its own per-request
 * format negotiation (AVIF/WebP) on top of these smaller sources.
 *
 * Run from repo root: `node scripts/optimize-images.mjs`
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public");
const MAX_DIMENSION = 1920; // largest edge
const PNG_QUALITY = 80;
const JPG_QUALITY = 82;
const TARGET_MAX_BYTES = 500 * 1024; // 500KB target

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function fmt(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)}M`;
  return `${Math.round(bytes / 1024)}K`;
}

async function optimize(file) {
  const original = await fs.stat(file);
  if (original.size <= TARGET_MAX_BYTES) return null;

  const ext = path.extname(file).toLowerCase();
  const image = sharp(file, { failOn: "none" });
  const metadata = await image.metadata();
  const longEdge = Math.max(metadata.width ?? 0, metadata.height ?? 0);
  const shouldResize = longEdge > MAX_DIMENSION;

  let pipeline = image;
  if (shouldResize) {
    pipeline = pipeline.resize({
      width: metadata.width >= metadata.height ? MAX_DIMENSION : undefined,
      height: metadata.height > metadata.width ? MAX_DIMENSION : undefined,
      withoutEnlargement: true,
    });
  }
  if (ext === ".png") {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true });
  } else {
    pipeline = pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true });
  }
  const buffer = await pipeline.toBuffer();

  // Only write if smaller than original.
  if (buffer.length >= original.size) return null;
  await fs.writeFile(file, buffer);
  return { before: original.size, after: buffer.length };
}

const files = await walk(ROOT);
let totalBefore = 0;
let totalAfter = 0;
let touched = 0;
for (const file of files) {
  const result = await optimize(file);
  if (result) {
    touched++;
    totalBefore += result.before;
    totalAfter += result.after;
    const rel = path.relative(ROOT, file);
    console.log(`${rel}: ${fmt(result.before)} -> ${fmt(result.after)}`);
  }
}
console.log(
  `\nOptimized ${touched} file(s). Saved ${fmt(totalBefore - totalAfter)} (${fmt(totalBefore)} -> ${fmt(totalAfter)}).`,
);
