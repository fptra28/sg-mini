import type {
  ClientAreaTradePilotMarketContextSummaryCopy,
  ClientAreaTradePilotMarketSentiment,
} from "@/lib/client-area-trade-pilot.shared";

type ClientAreaTradePilotMarketContextSectionProps = {
  copy: ClientAreaTradePilotMarketContextSummaryCopy;
  sentiment: ClientAreaTradePilotMarketSentiment;
};

const MARKET_CONTEXT_STYLES = {
  bearish: {
    backgroundImage: "/assets/bearishBG.png",
    borderClass: "border-red-600/90",
    badgeClass: "bg-red-800 text-white",
    titleClass: "text-red-500",
  },
  bullish: {
    backgroundImage: "/assets/bullishBG.png",
    borderClass: "border-emerald-500/90",
    badgeClass: "bg-emerald-700 text-white",
    titleClass: "text-emerald-400",
  },
} as const;

export function ClientAreaTradePilotMarketContextSection({
  copy,
  sentiment,
}: ClientAreaTradePilotMarketContextSectionProps) {
  const style = MARKET_CONTEXT_STYLES[sentiment];
  const isBearish = sentiment === "bearish";

  return (
    <section
      className={`relative isolate min-h-56 overflow-hidden rounded-3xl border bg-black bg-cover bg-right ${style.borderClass}`}
      style={{ backgroundImage: `url(${style.backgroundImage})` }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/85 to-black/10 sm:via-black/60" />
      <div className="flex min-h-56 max-w-4xl flex-col justify-center px-5 py-8 sm:px-8 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-wide text-zinc-300">
          {copy.eyebrow}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
          <h2 className={`text-xl font-bold sm:text-2xl ${style.titleClass}`}>
            {isBearish ? copy.bearishTitle : copy.bullishTitle}
          </h2>
          <span
            className={`rounded-lg px-4 py-1.5 text-sm font-bold uppercase ${style.badgeClass}`}
          >
            {isBearish ? copy.sellLabel : copy.buyLabel}
          </span>
        </div>
        <div className="mt-5 max-w-3xl space-y-1 text-sm leading-6 text-zinc-300 sm:text-base">
          <p>
            {isBearish
              ? copy.bearishDescription
              : copy.bullishDescription}
          </p>
          <p>{isBearish ? copy.bearishNote : copy.bullishNote}</p>
        </div>
      </div>
    </section>
  );
}
