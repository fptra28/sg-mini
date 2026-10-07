type ClientAreaTradePilotStaticOptionProps = {
  active?: boolean;
  label: string;
};

export function ClientAreaTradePilotStaticOption({
  active = false,
  label,
}: ClientAreaTradePilotStaticOptionProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      disabled
      className={`min-h-14 w-full cursor-default rounded-xl border px-4 py-3 text-sm font-semibold ${active
          ? "border-amber-500 bg-amber-500/10 text-white"
          : "border-zinc-700 bg-zinc-500/10 text-zinc-300"
        }`}
    >
      {label}
    </button>
  );
}
