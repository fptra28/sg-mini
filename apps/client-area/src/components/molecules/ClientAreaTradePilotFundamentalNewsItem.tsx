import { ExternalLink } from "lucide-react";
import Link from "next/link";

type ClientAreaTradePilotFundamentalNewsItemProps = {
  href: string;
  publishedAt: string;
  source: string;
  title: string;
};

export function ClientAreaTradePilotFundamentalNewsItem({
  href,
  publishedAt,
  source,
  title,
}: ClientAreaTradePilotFundamentalNewsItemProps) {
  return (
    <article>
      <Link
        href={href}
        className="group inline-flex max-w-full items-start gap-2 text-sm font-bold leading-6 text-zinc-200 transition hover:text-amber-400 sm:text-base"
      >
        <span>{title}</span>
        <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-zinc-600 transition group-hover:text-amber-400" />
      </Link>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
        <strong className="rounded-md bg-[#171a23] px-2.5 py-1 text-xs text-zinc-300">
          {source}
        </strong>
        <span>{publishedAt}</span>
      </div>
    </article>
  );
}
