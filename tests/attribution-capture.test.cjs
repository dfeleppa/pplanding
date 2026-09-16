const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const { randomUUID } = require("node:crypto");
const source = fs.readFileSync(path.join(__dirname, "../src/app/get-started/attribution-capture.tsx"), "utf8");
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;

async function capture(store, environment = "production", blocked = false) {
  const requests = [];
  const box = {
    exports: {}, require: () => ({ useRef: () => ({ current: false }), useEffect: (fn) => { fn(); fn(); } }),
    window: { location: { href: "https://www.planet-pooch.com/get-started/?utm_source=meta&utm_campaign=boarding&fbclid=test-click&email=private#secret" },
      localStorage: { getItem: (key) => store.get(key), setItem: (key, value) => {
        if (blocked) throw Error("blocked"); store.set(key, value);
      }, removeItem: (key) => store.delete(key) } },
    document: { referrer: "https://facebook.com/path?private=secret" },
    process: { env: { NODE_ENV: environment } }, crypto: { randomUUID }, URL, Date, AbortSignal, setTimeout,
    fetch: async (endpoint, options) => { requests.push({ endpoint, options, body: JSON.parse(options.body) }); return { ok: true }; },
  };
  vm.runInNewContext(js, box);
  box.exports.AttributionCapture();
  await new Promise((resolve) => setImmediate(resolve));
  return requests;
}

test("central capture sends allowlisted attribution once, with no contact data or conversion event", async () => {
  const store = new Map([["pp_get_started_attribution_v1", "old-data"]]);
  const requests = await capture(store);
  assert.equal(requests.length, 1);
  const { endpoint, options, body } = requests[0];
  assert.equal(endpoint, "https://app.planet-pooch.com/api/marketing/website-attribution/capture");
  assert.equal(options.credentials, "omit");
  assert.equal(body.campaign.utm_source, "meta");
  assert.equal(body.click_ids.fbclid, "test-click");
  assert.equal(body.landing_page, "https://www.planet-pooch.com/get-started/");
  assert.equal(body.referrer_origin, "https://facebook.com");
  assert(!JSON.stringify(body).includes("private"));
  assert.equal(store.has("pp_get_started_attribution_v1"), false);
  const saved = JSON.parse(store.get("pp_attribution_visitor_v1"));
  assert.deepEqual(Object.keys(saved).sort(), ["expires_at", "id"]);
  assert.equal(body.visitor_id, saved.id);
});

test("repeat visits keep the visitor ID but have different idempotency IDs", async () => {
  const store = new Map();
  const first = (await capture(store))[0].body;
  const second = (await capture(store))[0].body;
  assert.equal(first.visitor_id, second.visitor_id);
  assert.notEqual(first.event_id, second.event_id);
});

test("development previews do not record production visits", async () => {
  assert.equal((await capture(new Map(), "development")).length, 0);
});

test("blocked browser storage does not prevent capture", async () => {
  assert.equal((await capture(new Map(), "production", true)).length, 1);
});
