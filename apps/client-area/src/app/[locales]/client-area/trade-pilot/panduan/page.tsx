import type { Metadata } from "next";

import {
  assertValidLocale,
  buildClientAreaTradePilotMetadata,
  generateClientAreaStaticParams,
  type ClientAreaSubpageProps,
} from "@/app/[locales]/client-area/client-area-page.shared";
import { ClientAreaTradePilotGuidePanel } from "@/components/organisms/ClientAreaTradePilotGuidePanel";
import { getMessages, getTradePilotGuidePageContent } from "@/locales";

type ClientAreaTradePilotGuidePageProps = ClientAreaSubpageProps;

export function generateStaticParams() {
  return generateClientAreaStaticParams();
}

export async function generateMetadata({
  params,
}: ClientAreaTradePilotGuidePageProps): Promise<Metadata> {
  const { locales } = await params;
  assertValidLocale(locales);

  return buildClientAreaTradePilotMetadata(locales, "panduan");
}

export default async function ClientAreaTradePilotGuidePage({
  params,
}: ClientAreaTradePilotGuidePageProps) {
  const { locales } = await params;
  assertValidLocale(locales);

  const messages = getMessages(locales);
  const copy = getTradePilotGuidePageContent(locales);

  return (
    <ClientAreaTradePilotGuidePanel
      copy={copy}
      livePriceLabel={messages.clientArea.livePriceTicker.label}
    />
  );
}
