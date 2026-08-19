"use client";

import { useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ContentSection } from "../lib/content/types";

type GroupTrainingSection = Extract<ContentSection, { type: "groupTraining" }>;

const visibleDayCount = 28;
const businessTimeZone = "America/New_York";
const weekdayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const calendarWeekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const subscribeToClient = () => () => {};

function startOfWeek(date: Date) {
  const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
  start.setDate(start.getDate() - start.getDay());
  return start;
}

function currentBusinessDate() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: businessTimeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return new Date(Number(values.year), Number(values.month) - 1, Number(values.day), 12);
}

function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, 12);
}

function isSameDay(first: Date, second: Date) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function formatDateRange(start: Date, end: Date) {
  const sameYear = start.getFullYear() === end.getFullYear();
  const sameMonth = sameYear && start.getMonth() === end.getMonth();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" });

  if (sameMonth) {
    return `${month.format(start)} ${start.getDate()}–${end.getDate()}, ${end.getFullYear()}`;
  }

  if (sameYear) {
    return `${month.format(start)} ${start.getDate()}–${month.format(end)} ${end.getDate()}, ${end.getFullYear()}`;
  }

  return `${month.format(start)} ${start.getDate()}, ${start.getFullYear()}–${month.format(end)} ${end.getDate()}, ${end.getFullYear()}`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
}

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function GroupTrainingSchedule({
  schedule,
  scheduleOverrides = [],
}: {
  schedule: GroupTrainingSection["schedule"];
  scheduleOverrides?: GroupTrainingSection["scheduleOverrides"];
}) {
  const [weekOffset, setWeekOffset] = useState(0);
  const isClient = useSyncExternalStore(subscribeToClient, () => true, () => false);

  if (!isClient) {
    return (
      <div className="mt-6 border border-[rgba(50,73,83,0.12)] bg-white/75 px-5 py-8 text-sm text-[rgba(47,42,39,0.64)]">
        Loading the current class schedule…
      </div>
    );
  }

  const today = currentBusinessDate();
  const currentWeekStart = startOfWeek(today);
  const visibleStart = addDays(currentWeekStart, weekOffset * 7);
  const visibleEnd = addDays(visibleStart, visibleDayCount - 1);
  const visibleDays = Array.from({ length: visibleDayCount }, (_, index) => {
    const date = addDays(visibleStart, index);
    const dayName = weekdayNames[date.getDay()];
    const override = scheduleOverrides.find((item) => item.date === formatDateKey(date));
    return {
      date,
      sessions: override?.sessions ?? schedule.find((day) => day.day === dayName)?.sessions ?? [],
    };
  });

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-3 border border-[rgba(50,73,83,0.12)] bg-white/75 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-semibold text-[var(--pp-ink)]">
          {formatDateRange(visibleStart, visibleEnd)}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Move schedule back one week"
            disabled={weekOffset === 0}
            onClick={() => setWeekOffset((offset) => Math.max(0, offset - 1))}
            className="inline-flex min-h-9 items-center justify-center gap-2 border border-[rgba(50,73,83,0.18)] px-3 text-xs font-bold text-[var(--pp-ink)] transition hover:bg-[var(--pp-mint)]/25 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </button>
          <button
            type="button"
            aria-label="Move schedule forward one week"
            onClick={() => setWeekOffset((offset) => offset + 1)}
            className="inline-flex min-h-9 items-center justify-center gap-2 border border-[rgba(50,73,83,0.18)] px-3 text-xs font-bold text-[var(--pp-ink)] transition hover:bg-[var(--pp-mint)]/25"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto border border-[rgba(50,73,83,0.12)] bg-[rgba(50,73,83,0.1)]">
        <div className="min-w-[56rem]">
          <div className="grid grid-cols-7 gap-px bg-[var(--pp-night)] text-white">
            {calendarWeekdays.map((day) => (
              <div key={day} className="px-3 py-3 text-xs font-bold uppercase tracking-[0.08em]">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px">
            {visibleDays.map((day) => {
              const isToday = isSameDay(day.date, today);
              return (
                <article
                  key={day.date.toISOString()}
                  className={`min-h-44 bg-[#fffdf8] p-3 ${
                    isToday ? "shadow-[inset_0_0_0_2px_var(--pp-main)]" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold text-[var(--pp-ink)]">{formatDate(day.date)}</p>
                    {isToday ? (
                      <span className="bg-[var(--pp-mint)] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--pp-night)]">
                        Today
                      </span>
                    ) : null}
                  </div>

                  {day.sessions.length ? (
                    <div className="mt-3 grid gap-1.5">
                      {day.sessions.map((session) => (
                        <div
                          key={`${session.time}-${session.className}`}
                          className="bg-[var(--pp-mint)]/25 px-2 py-1.5"
                        >
                          <p className="text-[10px] leading-4 text-[var(--pp-ink)]">
                            <span className="font-bold">{session.time}</span>
                            <span className="text-[rgba(47,42,39,0.5)]"> · </span>
                            <span className="text-[rgba(47,42,39,0.68)]">{session.className}</span>
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="sr-only">No classes</span>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
