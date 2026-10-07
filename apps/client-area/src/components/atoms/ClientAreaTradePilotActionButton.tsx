import type { ReactNode } from "react";

type ClientAreaTradePilotActionButtonProps = {
  children: ReactNode;
  icon: ReactNode;
  variant: "primary" | "outline";
};

const VARIANT_CLASS_NAMES = {
  primary: "bg-yellow-500 text-black hover:bg-yellow-400",
  outline:
    "border border-yellow-500/60 text-yellow-400 hover:bg-yellow-500/10",
} as const;

export function ClientAreaTradePilotActionButton({
  children,
  icon,
  variant,
}: ClientAreaTradePilotActionButtonProps) {
  return (
    <button
      type="button"
      className={`flex w-full items-center justify-center gap-3 rounded-2xl px-4 py-4 font-bold transition ${VARIANT_CLASS_NAMES[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
}
