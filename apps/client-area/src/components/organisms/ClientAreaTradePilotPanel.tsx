"use client";

import { useState } from "react";

import { ClientAreaLivePriceTicker } from "@/components/molecules/ClientAreaLivePriceTicker";
import { ClientAreaTradePilotActions } from "@/components/molecules/ClientAreaTradePilotActions";
import { ClientAreaTradePilotInstrumentPicker } from "@/components/molecules/ClientAreaTradePilotInstrumentPicker";
import { ClientAreaTradePilotPageHeader } from "@/components/molecules/ClientAreaTradePilotPageHeader";
import { ClientAreaTradePilotChartPanel } from "@/components/organisms/ClientAreaTradePilotChartPanel";
import { ClientAreaTradePilotAnalysisResultSection } from "@/components/organisms/ClientAreaTradePilotAnalysisResultSection";
import { ClientAreaTradePilotFundamentalSection } from "@/components/organisms/ClientAreaTradePilotFundamentalSection";
import { ClientAreaTradePilotMarketContextSection } from "@/components/organisms/ClientAreaTradePilotMarketContextSection";
import { ClientAreaTradePilotTradingPlanSection } from "@/components/organisms/ClientAreaTradePilotTradingPlanSection";
import { useLiveQuoteStream } from "@/hooks/useLiveQuoteStream";
import {
  CLIENT_AREA_TRADE_PILOT_INSTRUMENTS,
  STATIC_CLIENT_AREA_TRADE_PILOT_ANALYSIS,
  findClientAreaTradePilotTick,
  type ClientAreaTradePilotCopy,
  type ClientAreaTradePilotInstrument,
  type ClientAreaTradePilotTimeframe,
} from "@/lib/client-area-trade-pilot.shared";
import type { AppLocale } from "@/locales";
import type { EconomicCalendarEvent } from "@/lib/economic-calendar.shared";

type ClientAreaTradePilotPanelProps = {
  copy: ClientAreaTradePilotCopy;
  economicCalendarEvents: EconomicCalendarEvent[];
  livePriceLabel: string;
  locale: AppLocale;
};

export function ClientAreaTradePilotPanel({
  copy,
  economicCalendarEvents,
  livePriceLabel,
  locale,
}: ClientAreaTradePilotPanelProps) {
  const { quotes } = useLiveQuoteStream();
  const [selectedInstrumentId, setSelectedInstrumentId] =
    useState<ClientAreaTradePilotInstrument["id"]>("gold");
  const [timeframe, setTimeframe] =
    useState<ClientAreaTradePilotTimeframe>("60");

  const selectedInstrument =
    CLIENT_AREA_TRADE_PILOT_INSTRUMENTS.find(
      ({ id }) => id === selectedInstrumentId,
    ) ?? CLIENT_AREA_TRADE_PILOT_INSTRUMENTS[0];
  const { symbol: quoteSymbol, tick } = findClientAreaTradePilotTick(
    quotes,
    selectedInstrument,
  );

  return (
    <div className="min-w-0 space-y-4 text-sm sm:space-y-5">
      <ClientAreaLivePriceTicker label={livePriceLabel} />
      <ClientAreaTradePilotPageHeader copy={copy} />

      <div className="grid min-w-0 items-start gap-4 sm:gap-5 xl:grid-cols-[minmax(250px,300px)_minmax(0,1fr)]">
        <aside className="grid min-w-0 gap-4 sm:gap-5 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.45fr)] xl:block xl:space-y-5">
          <ClientAreaTradePilotInstrumentPicker
            copy={copy}
            instruments={CLIENT_AREA_TRADE_PILOT_INSTRUMENTS}
            onSelect={setSelectedInstrumentId}
            quotes={quotes}
            selectedInstrumentId={selectedInstrumentId}
          />
          <ClientAreaTradePilotActions copy={copy} />
        </aside>

        <ClientAreaTradePilotChartPanel
          copy={copy}
          instrument={selectedInstrument}
          locale={locale}
          onTimeframeChange={setTimeframe}
          quoteSymbol={quoteSymbol}
          tick={tick}
          timeframe={timeframe}
        />
      </div>

      <ClientAreaTradePilotAnalysisResultSection copy={copy} locale={locale} />
      <ClientAreaTradePilotFundamentalSection
        copy={copy.fundamentalContext}
        events={economicCalendarEvents}
        locale={locale}
      />
      <ClientAreaTradePilotMarketContextSection
        copy={copy.marketContextSummary}
        sentiment={STATIC_CLIENT_AREA_TRADE_PILOT_ANALYSIS.marketSentiment}
      />
      <ClientAreaTradePilotTradingPlanSection copy={copy.tradingPlan} />
    </div>
  );
}
