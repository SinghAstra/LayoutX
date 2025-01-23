"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { type DocsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { NavItemWithChildren } from "@/types/nav";

export function DocsNav({
  config,
  className,
}: {
  config: DocsConfig;
  className?: string;
}) {
  const pathname = usePathname();
  const items = config.sidebarNav;

  return (
    <div
      className={cn(
        "w-64 bg-background p-2 space-y-2 overflow-auto h-full",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h4 className="rounded-md px-2 py-1 text-sm font-medium tracking-wide">
            {item.title}
          </h4>
          {item?.items?.length && (
            <DocsNavItems items={item.items} pathname={pathname} />
          )}
        </div>
      ))}
    </div>
  );
}

function DocsNavItems({
  items,
  pathname,
}: {
  items: NavItemWithChildren[];
  pathname: string | null;
}) {
  return items?.length ? (
    <div className="gap-0.5 text-sm">
      {items.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "group flex h-8 w-full items-center px-2 font-normal text-foreground hover:bg-accent hover:text-accent-foreground transition-all",
                pathname === item.href &&
                  "bg-accent font-medium text-accent-foreground border-l-2 border-primary"
              )}
            >
              {item.title}
              {item.label && (
                <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] ">
                  {item.label}
                </span>
              )}
            </Link>
          )
      )}
    </div>
  ) : null;
}
