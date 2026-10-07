"use client";

import { Maximize2, Share2 } from "lucide-react";

import TradingView, {
  type TradingViewPreset,
} from "@/components/organisms/TradingView";
import type {
  ClientAreaTradePilotAnalysisResultCopy,
  ClientAreaTradePilotTimeframe,
} from "@/lib/client-area-trade-pilot.shared";
import type { AppLocale } from "@/locales";

type ClientAreaTradePilotPricePreviewProps = {
  copy: ClientAreaTradePilotAnalysisResultCopy;
  instrumentLabel: string;
  locale: AppLocale;
  timeframe: ClientAreaTradePilotTimeframe;
};

const ANALYSIS_TRADING_VIEW_PRESETS: TradingViewPreset[] = [
  {
    id: "analysis-xauusd",
    label: "XAU/USD",
    symbol: "OANDA:XAUUSD",
  },
];

const ANALYSIS_TRADING_VIEW_URL =
  "https://www.tradingview.com/chart/?symbol=OANDA%3AXAUUSD";

export function ClientAreaTradePilotPricePreview({
  copy,
  instrumentLabel,
  locale,
  timeframe,
}: ClientAreaTradePilotPricePreviewProps) {
  const handleFullChart = () => {
    document
      .getElementById("trade-pilot-main-chart")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${copy.priceChartTitle} - ${instrumentLabel}`,
          text: `${instrumentLabel} (OANDA:XAUUSD)`,
          url: ANALYSIS_TRADING_VIEW_URL,
        });
        return;
      }

      await navigator.clipboard.writeText(ANALYSIS_TRADING_VIEW_URL);
    } catch {
      // The native share sheet may be cancelled by the user.
    }
  };

  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-500/10 p-5 sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">{copy.priceChartTitle}</h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
            <strong className="text-white">{instrumentLabel}</strong>
            <span className="rounded-md border border-zinc-700 bg-zinc-900/80 px-2 py-1 font-mono text-xs font-semibold text-amber-400">
              OANDA:XAUUSD
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleFullChart}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-500/10 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-amber-500/50"
        >
          <Maximize2 className="h-4 w-4" />
          {copy.viewFullChartLabel}
        </button>
      </div>

      <TradingView
        activePresetId="analysis-xauusd"
        chartHeightClassName="h-[290px] sm:h-[350px]"
        className="pt-5"
        defaultInterval={timeframe}
        embedded
        hideSideToolbar
        hideTopToolbar
        locale={locale}
        presets={ANALYSIS_TRADING_VIEW_PRESETS}
      />

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-500/10 px-4 py-2 text-sm font-semibold text-zinc-200 transition hover:border-amber-500/50"
        >
          <Share2 className="h-4 w-4" />
          {copy.shareChartLabel}
        </button>
      </div>
    </article>
  );
}
