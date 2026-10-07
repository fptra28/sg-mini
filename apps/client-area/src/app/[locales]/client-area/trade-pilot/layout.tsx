import type { ReactNode } from "react";

import {
  assertValidLocale,
  type ClientAreaSubpageProps,
} from "@/app/[locales]/client-area/client-area-page.shared";
import { ClientAreaShell } from "@/components/organisms/ClientAreaShell";
import { requireClientAreaSession } from "@/lib/client-area-auth";

type ClientAreaTradePilotLayoutProps = {
  children: ReactNode;
  params: ClientAreaSubpageProps["params"];
};

export default async function ClientAreaTradePilotLayout({
  children,
  params,
}: ClientAreaTradePilotLayoutProps) {
  const { locales } = await params;
  assertValidLocale(locales);
  await requireClientAreaSession(locales);

  return (
    <ClientAreaShell
      activeTab="trade-pilot"
      locale={locales}
      showHeaderTicker={false}
    >
      {children}
    </ClientAreaShell>
  );
}
