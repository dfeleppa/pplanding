import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { name: string; href?: string };

export function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  if (items.length === 0) return null;
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(47,42,39,0.65)] ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition hover:text-[var(--pp-main)]"
                >
                  {item.name}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-[var(--pp-ink)]">
                  {item.name}
                </span>
              )}
              {!isLast ? (
                <ChevronRight className="h-3 w-3 shrink-0 opacity-50" aria-hidden />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
