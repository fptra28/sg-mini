import {
  ChevronRight,
  ShieldCheck,
  TriangleAlert,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import { ClientAreaTradePilotStaticOption } from "@/components/atoms/ClientAreaTradePilotStaticOption";
import { ClientAreaTradePilotRiskMetric } from "@/components/molecules/ClientAreaTradePilotRiskMetric";
import type { ClientAreaTradePilotTradingPlanCopy } from "@/lib/client-area-trade-pilot.shared";

type ClientAreaTradePilotTradingPlanSectionProps = {
  copy: ClientAreaTradePilotTradingPlanCopy;
};

export function ClientAreaTradePilotTradingPlanSection({
  copy,
}: ClientAreaTradePilotTradingPlanSectionProps) {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-500/10 p-5 sm:p-7">
      <div>
        <h2 className="text-lg font-bold text-white sm:text-xl">{copy.title}</h2>
        <p className="mt-1 text-sm text-zinc-400">
          {copy.description}
        </p>
      </div>

      <div className="mt-7 space-y-7">
        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-400">
            {copy.accountTypeLabel}
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <ClientAreaTradePilotStaticOption label={copy.microAccountLabel} />
            <ClientAreaTradePilotStaticOption
              active
              label={copy.miniAccountLabel}
            />
            <ClientAreaTradePilotStaticOption label={copy.regularAccountLabel} />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold text-zinc-400">
              {copy.tradingCapitalLabel}
            </p>
            <div className="flex min-h-14 items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-500/10 px-5 text-zinc-200">
              <span className="text-zinc-500">$</span>
              <strong>1000</strong>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-zinc-400">
              {copy.lossLimitLabel}
            </p>
            <div className="flex min-h-14 items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-500/10 px-5 text-zinc-200">
              <span className="text-zinc-500">$</span>
              <strong>800</strong>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-400">
            {copy.riskStyleLabel}
          </p>
          <div className="grid gap-3 sm:grid-cols-3 lg:max-w-4xl">
            <ClientAreaTradePilotStaticOption
              active
              label={copy.conservativeLabel}
            />
            <ClientAreaTradePilotStaticOption label={copy.moderateLabel} />
            <ClientAreaTradePilotStaticOption label={copy.aggressiveLabel} />
          </div>
        </div>
      </div>

      <div className="mt-7 space-y-1 text-sm leading-6 text-zinc-400">
        <p>{copy.intradayNote}</p>
        <p>
          {copy.snapshotLabel}: {copy.snapshotValue}
        </p>
      </div>

      <button
        type="button"
        disabled
        className="mt-7 flex w-full cursor-default items-center justify-center gap-3 rounded-2xl bg-amber-400 px-5 py-4 font-bold text-black opacity-80"
      >
        <ShieldCheck className="h-6 w-6" />
        {copy.createRecommendationLabel}
      </button>

      <div className="mt-7 grid gap-5 rounded-2xl border border-amber-500/25 bg-amber-950/10 p-5 sm:p-7 xl:grid-cols-[minmax(0,1.25fr)_minmax(260px,0.75fr)]">
        <div className="xl:border-r xl:border-amber-500/25 xl:pr-7">
          <div className="flex flex-wrap items-center gap-3">
            <strong className="text-xl font-bold uppercase text-amber-400">
              {copy.waitStatusLabel}
            </strong>
            <span className="rounded-lg bg-amber-300/80 px-3 py-1 text-xs font-bold text-black sm:text-sm">
              {copy.limitedOptionsLabel}
            </span>
          </div>
          <p className="mt-5 font-semibold leading-7 text-zinc-200">
            {copy.waitDescription}
          </p>
          <p className="mt-5 leading-7 text-amber-400">{copy.waitGuidance}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <ClientAreaTradePilotRiskMetric
            label={copy.minimumStopRiskLabel}
            value="$250"
          />
          <ClientAreaTradePilotRiskMetric
            label={copy.minimumStopRiskLabel}
            value="$350"
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-amber-600/70 bg-amber-950/15 p-5 text-amber-400 sm:p-7">
        <h3 className="flex items-center gap-2 font-bold">
          <TriangleAlert className="h-5 w-5" />
          {copy.warningTitle}
        </h3>
        <p className="mt-3 text-sm leading-6">
          {copy.warningDescription}
        </p>
      </div>

      <div className="mt-6 grid overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-500/10 sm:grid-cols-2">
        <div className="flex min-h-20 items-center justify-center gap-3 border-b border-zinc-700 px-5 py-4 font-bold text-zinc-200 sm:border-b-0 sm:border-r">
          <TrendingUp className="h-5 w-5" />
          {copy.buyScenarioLabel}
        </div>
        <div className="flex min-h-20 items-center justify-center gap-3 px-5 py-4 font-bold text-zinc-600">
          <TrendingDown className="h-5 w-5" />
          {copy.sellScenarioLabel}
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-800 pt-8">
        <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl border border-amber-600/60 bg-amber-500/10 px-5 py-4 text-amber-400">
          <strong>{copy.understandDetailsLabel}</strong>
          <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-zinc-200">
            {copy.cancellationConditionsLabel}
          </span>
          <ChevronRight className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}
