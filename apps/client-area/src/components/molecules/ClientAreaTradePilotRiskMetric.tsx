type ClientAreaTradePilotRiskMetricProps = {
  label: string;
  value: string;
};

export function ClientAreaTradePilotRiskMetric({
  label,
  value,
}: ClientAreaTradePilotRiskMetricProps) {
  return (
    <div className="flex min-h-28 flex-col items-center justify-center rounded-2xl bg-zinc-500/10 px-5 py-6 text-center">
      <span className="text-sm text-zinc-400">{label}</span>
      <strong className="mt-1 text-lg text-white sm:text-xl">{value}</strong>
    </div>
  );
}
