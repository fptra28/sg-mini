import type { Metadata } from "next";

import {
  assertValidLocale,
  buildClientAreaTradePilotMetadata,
  generateClientAreaStaticParams,
  type ClientAreaSubpageProps,
} from "@/app/[locales]/client-area/client-area-page.shared";
import { ClientAreaTradePilotPlaceholderPanel } from "@/components/organisms/ClientAreaTradePilotPlaceholderPanel";
import { getMessages } from "@/locales";

type ClientAreaTradePilotPerformancePageProps = ClientAreaSubpageProps;

export function generateStaticParams() {
  return generateClientAreaStaticParams();
}

export async function generateMetadata({
  params,
}: ClientAreaTradePilotPerformancePageProps): Promise<Metadata> {
  const { locales } = await params;
  assertValidLocale(locales);

  return buildClientAreaTradePilotMetadata(locales, "riwayat-performa");
}

export default async function ClientAreaTradePilotPerformancePage({
  params,
}: ClientAreaTradePilotPerformancePageProps) {
  const { locales } = await params;
  assertValidLocale(locales);

  const copy = getMessages(locales).clientArea.tradePilotPage.performanceHistory;

  return (
    <ClientAreaTradePilotPlaceholderPanel
      description={copy.description}
      performanceCopy={copy}
      title={copy.title}
    />
  );
}
