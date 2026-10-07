import {
  Clock3,
  ShieldCheck,
  ShieldX,
  Target,
  TrendingDown,
  TriangleAlert,
} from "lucide-react";

import { ClientAreaTradePilotStatCard } from "@/components/atoms/ClientAreaTradePilotStatCard";
import { ClientAreaTradePilotPerformanceInsight } from "@/components/atoms/ClientAreaTradePilotPerformanceInsight";
import { ClientAreaTradePilotInstrumentPerformance } from "@/components/molecules/ClientAreaTradePilotInstrumentPerformance";
import { ClientAreaTradePilotTimeframePerformanceTable } from "@/components/molecules/ClientAreaTradePilotTimeframePerformanceTable";
import type { ClientAreaTradePilotPerformanceHistoryCopy } from "@/lib/client-area-trade-pilot.shared";

type ClientAreaTradePilotPlaceholderPanelProps = {
  description: string;
  performanceCopy?: ClientAreaTradePilotPerformanceHistoryCopy;
  title: string;
};

export function ClientAreaTradePilotPlaceholderPanel({
  description,
  performanceCopy,
  title,
}: ClientAreaTradePilotPlaceholderPanelProps) {
  const statistics = performanceCopy
    ? [
      {
        featured: false,
        icon: Target,
        label: performanceCopy.stats.totalAnalysis,
        tone: "amber" as const,
        value: "58",
      },
      {
        featured: false,
        icon: Clock3,
        label: performanceCopy.stats.stillValid,
        tone: "sky" as const,
        value: "1",
      },
      {
        featured: false,
        icon: ShieldX,
        label: performanceCopy.stats.expired,
        tone: "orange" as const,
        value: "5",
      },
      {
        featured: false,
        icon: TrendingDown,
        label: performanceCopy.stats.stopLoss,
        tone: "rose" as const,
        value: "11",
      },
      {
        featured: false,
        icon: ShieldCheck,
        label: performanceCopy.stats.takeProfitOne,
        tone: "emerald" as const,
        value: "1",
      },
      {
        featured: false,
        icon: ShieldCheck,
        label: performanceCopy.stats.takeProfitTwo,
        tone: "teal" as const,
        value: "4",
      },
      {
        featured: false,
        icon: TriangleAlert,
        label: performanceCopy.stats.invalid,
        tone: "orange" as const,
        value: "0",
      },
    ]
    : [];

  return (
    <section className="space-y-3">
      <div className="min-w-0">
        <h1 className="text-lg font-bold text-white sm:text-xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          {performanceCopy?.totalSummary ?? description}
        </p>
      </div>

      {performanceCopy ? (
        <>
          <div className="rounded-xl border border-zinc-700 p-1">
            <div className="flex items-center gap-1">
              <button
                type="button"
                className="w-full rounded-lg border border-amber-500 bg-amber-500/10 p-3 text-sm font-semibold text-amber-400"
              >
                {performanceCopy.summaryTabLabel}
              </button>
              <button
                type="button"
                className="w-full rounded-lg border border-transparent p-3 text-sm font-semibold text-zinc-400"
              >
                {performanceCopy.historyTabLabel}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[performanceCopy.allPeriodLabel, "7D", "30D", "90D"].map(
              (period, index) => (
                <button
                  key={period}
                  type="button"
                  className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-semibold ${index === 0
                    ? "border-amber-500 bg-amber-500/10 text-amber-400"
                    : "border-zinc-700 text-zinc-400"
                    }`}
                >
                  {period}
                </button>
              ),
            )}
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#101113] p-1.5 sm:p-2">
            <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 xl:grid-cols-7">
              {statistics.map((statistic) => (
                <ClientAreaTradePilotStatCard
                  key={statistic.label}
                  featured={statistic.featured}
                  icon={statistic.icon}
                  label={statistic.label}
                  tone={statistic.tone}
                  value={statistic.value}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            <ClientAreaTradePilotPerformanceInsight
              label={performanceCopy.consistentTimeframeLabel}
              value="1h · 30%"
            />
            <ClientAreaTradePilotPerformanceInsight
              label={performanceCopy.mostExpiredLabel}
              value="1h · 0"
            />
            <ClientAreaTradePilotPerformanceInsight
              label={performanceCopy.mostStopLossLabel}
              value="1h · 7"
            />
          </div>

          <ClientAreaTradePilotInstrumentPerformance copy={performanceCopy} />
          <ClientAreaTradePilotTimeframePerformanceTable copy={performanceCopy} />
        </>
      ) : (
        <div className="rounded-2xl border border-zinc-800 bg-[#101113] p-5 text-sm leading-6 text-zinc-400 sm:p-7">
          {description}
        </div>
      )}
    </section>
  );
}
