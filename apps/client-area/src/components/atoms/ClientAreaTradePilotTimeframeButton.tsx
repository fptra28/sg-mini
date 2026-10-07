import type { ClientAreaTradePilotTimeframe } from "@/lib/client-area-trade-pilot.shared";

type ClientAreaTradePilotTimeframeButtonProps = {
  active: boolean;
  disabled?: boolean;
  label: string;
  onSelect?: (timeframe: ClientAreaTradePilotTimeframe) => void;
  value: ClientAreaTradePilotTimeframe;
};

export function ClientAreaTradePilotTimeframeButton({
  active,
  disabled = false,
  label,
  onSelect,
  value,
}: ClientAreaTradePilotTimeframeButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={disabled}
      onClick={() => onSelect?.(value)}
      className={`min-w-10 shrink-0 rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
        active
          ? "bg-yellow-500 text-black"
          : "text-zinc-400 enabled:hover:text-white"
      } ${
        disabled ? "cursor-default disabled:opacity-70" : ""
      }`}
    >
      {label}
    </button>
  );
}
