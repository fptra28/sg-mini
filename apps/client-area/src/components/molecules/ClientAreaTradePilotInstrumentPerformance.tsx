import type { ClientAreaTradePilotPerformanceHistoryCopy } from "@/lib/client-area-trade-pilot.shared";

type ClientAreaTradePilotInstrumentPerformanceProps = {
  copy: ClientAreaTradePilotPerformanceHistoryCopy;
};

export function ClientAreaTradePilotInstrumentPerformance({
  copy,
}: ClientAreaTradePilotInstrumentPerformanceProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-[#0b0c0e]">
      <div className="border-b border-zinc-800 px-4 py-4 sm:px-5">
        <h2 className="text-sm font-bold text-white">
          {copy.instrumentPerformanceTitle}
        </h2>
        <p className="mt-1 text-xs text-zinc-400">
          {copy.instrumentPerformanceDescription}
        </p>
      </div>

      <article className="grid gap-4 border-l-2 border-amber-400 bg-amber-500/5 px-4 py-4 sm:px-5 md:grid-cols-2 md:items-center xl:grid-cols-[minmax(150px,0.8fr)_minmax(230px,1fr)_minmax(220px,1.4fr)_auto]">
        <div className="flex items-center justify-between gap-3 sm:block">
          <strong className="text-base text-white">XAU/USD</strong>
          <span className="text-xs text-zinc-400 sm:mt-1 sm:block">
            58 {copy.sampleLabel}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 text-xs">
          <div>
            <span className="text-zinc-500">{copy.winRateLabel}</span>
            <strong className="mt-1 block text-emerald-400">31%</strong>
          </div>
          <div>
            <span className="text-zinc-500">TP</span>
            <strong className="mt-1 block text-white">5</strong>
          </div>
          <div>
            <span className="text-zinc-500">SL</span>
            <strong className="mt-1 block text-rose-400">11</strong>
          </div>
        </div>

        <div>
          <div className="flex h-2 overflow-hidden rounded-full bg-zinc-800">
            <span className="w-[31%] bg-emerald-500" />
            <span className="w-[19%] bg-rose-500" />
            <span className="flex-1 bg-zinc-700" />
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-zinc-500">
            <span>{copy.winRateLabel} 31%</span>
            <span>SL 19%</span>
          </div>
        </div>

        <span className="whitespace-nowrap text-xs font-semibold text-amber-400">
          {copy.viewHistoryLabel}
        </span>
      </article>
    </section>
  );
}
