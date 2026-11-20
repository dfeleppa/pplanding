import Image from "next/image";
import { iconMap } from "./content-icons";
import type { ContentSection } from "../lib/content/types";

type BenefitSplitProps = {
  section: Extract<ContentSection, { type: "benefitSplit" }>;
  className: string;
};

export function BenefitSplit({ section, className }: BenefitSplitProps) {
  return (
    <section id={section.id} className={className}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          {section.eyebrow ? (
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--pp-main-deep)]">
              {section.eyebrow}
            </p>
          ) : null}
          {section.title ? (
            <h2 className="mt-3 text-4xl leading-tight text-[var(--pp-ink)] sm:text-[2.75rem]">
              {section.title}
            </h2>
          ) : null}
          {section.body ? (
            <p className="mt-5 text-lg leading-8 text-[rgba(47,42,39,0.82)]">
              {section.body}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div>
            {section.image ? (
              <div className="relative h-[320px] overflow-hidden rounded-[18px] border border-[rgba(50,73,83,0.12)] shadow-[0_18px_50px_rgba(50,73,83,0.10)] sm:h-[380px] lg:h-[400px] lg:max-h-[420px]">
                <Image
                  src={section.image}
                  alt={section.imageAlt ?? "Planet Pooch mobile grooming"}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>

          <div className="grid gap-4">
            {section.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <article
                  key={item.title}
                  className="flex items-start gap-4 rounded-[14px] border border-[rgba(50,73,83,0.10)] bg-[#fffdf8] p-6 shadow-[0_12px_30px_rgba(50,73,83,0.05)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--pp-mint)]/30">
                    {Icon ? <Icon className="h-5 w-5 stroke-[1.5] text-[var(--pp-main)]" /> : null}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--pp-ink)]">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[rgba(47,42,39,0.72)]">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
