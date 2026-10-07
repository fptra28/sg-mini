"use client";

import { ArrowDown, ArrowUp } from "lucide-react";

import { useLiveQuoteStream } from "@/hooks/useLiveQuoteStream";
import type { LiveQuotePayload, LiveQuoteTick } from "@/lib/live-quotes";

type ClientAreaLivePriceTickerProps = {
  label: string;
};

type TickerInstrument = {
  label: string;
  symbolPrefixes: string[];
  symbols: string[];
};

const TICKER_INSTRUMENTS: TickerInstrument[] = [
  {
    label: "XAUUSD",
    symbols: ["XUL10", "XUL10_BBJ", "XAUUSD"],
    symbolPrefixes: ["XAUUSD", "XUL"],
  },
  {
    label: "BCO",
    symbols: ["BCO10_BBJ", "BCO"],
    symbolPrefixes: ["BCO"],
  },
  {
    label: "HKK",
    symbols: ["HKK50_BBJ", "HKK"],
    symbolPrefixes: ["HKK"],
  },
  {
    label: "JPK",
    symbols: ["JPK50_BBJ", "JPK"],
    symbolPrefixes: ["JPK"],
  },
];

function isAllowedTickerSymbol(symbol: string) {
  return !symbol.trim().toUpperCase().includes("NC");
}

function resolveTickerTick(
  quotes: LiveQuotePayload,
  instrument: TickerInstrument,
): LiveQuoteTick | undefined {
  for (const symbol of instrument.symbols) {
    if (isAllowedTickerSymbol(symbol) && quotes[symbol]) {
      return quotes[symbol];
    }
  }

  const matchingEntry = Object.entries(quotes).find(([symbol]) => {
    const normalizedSymbol = symbol.trim().toUpperCase();

    return (
      isAllowedTickerSymbol(normalizedSymbol) &&
      instrument.symbolPrefixes.some((prefix) =>
        normalizedSymbol.startsWith(prefix),
      )
    );
  });

  return matchingEntry?.[1];
}

function resolveTickerPrice(tick?: LiveQuoteTick) {
  return tick?.price || "--";
}

function parseTickerPrice(value?: string) {
  if (!value) {
    return null;
  }

  const parsedValue = Number.parseFloat(value.replace(/,/g, "").trim());
  return Number.isFinite(parsedValue) ? parsedValue : null;
}

function resolveTickerDirection(tick?: LiveQuoteTick) {
  const currentPrice = parseTickerPrice(resolveTickerPrice(tick));
  const openPrice = parseTickerPrice(tick?.oprice);

  if (currentPrice === null || openPrice === null) {
    return null;
  }

  const isUp = currentPrice > openPrice;

  if (isUp) {
    return {
      Icon: ArrowUp,
      className: "text-emerald-400",
    };
  }

  return {
    Icon: ArrowDown,
    className: "text-rose-400",
  };
}

export function ClientAreaLivePriceTicker({
  label,
}: ClientAreaLivePriceTickerProps) {
  const { quotes } = useLiveQuoteStream();
  const tickerItems = TICKER_INSTRUMENTS.map((instrument) => ({
    ...instrument,
    tick: resolveTickerTick(quotes, instrument),
  }));
  const repeatedTickerItems = Array.from({ length: 4 }, () => tickerItems).flat();

  return (
    <section
      aria-label={label}
      className="flex min-w-0 items-stretch overflow-hidden rounded-full border border-white/8 bg-zinc-500/10 shadow-lg shadow-black/10"
    >
      <div className="min-w-0 flex-1 overflow-hidden py-2.5">
        <div className="client-area-live-price-track">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex === 1}
              className="client-area-live-price-group"
            >
              {repeatedTickerItems.map(({ label: symbolLabel, tick }, itemIndex) => {
                const direction = resolveTickerDirection(tick);
                const DirectionIcon = direction?.Icon;

                return (
                  <div
                    key={`${groupIndex}-${itemIndex}-${symbolLabel}`}
                    className="flex shrink-0 items-center gap-2 px-5 sm:px-8"
                  >
                    <span className="text-xs font-black tracking-wide text-zinc-100 sm:text-sm">
                      {symbolLabel}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold tabular-nums sm:text-sm ${direction?.className ?? "text-zinc-500"}`}
                    >
                      {resolveTickerPrice(tick)}
                    </span>
                    {DirectionIcon ? (
                      <DirectionIcon
                        aria-hidden="true"
                        className={`h-3.5 w-3.5 ${direction?.className ?? ""}`}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
