"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  BoltIcon,
  ChartIcon,
  CompassIcon,
  HomeIcon,
  PlanIcon,
  WalletIcon,
} from "./Icons";

const navItems = [
  { href: "/", label: "Home", Icon: HomeIcon },
  { href: "/consumi", label: "Consumi", Icon: ChartIcon },
  { href: "/budget", label: "Budget", Icon: WalletIcon },
  { href: "/esplora", label: "Esplora", Icon: CompassIcon },
  { href: "/piano", label: "Piano", Icon: PlanIcon },
];

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-backdrop">
      <div className="app-frame">
        <header className="topbar">
          <Link href="/" className="brand" aria-label="WattlySaver, home">
            <span className="brand-mark">
              <BoltIcon size={18} />
            </span>
            <span>WattlySaver</span>
          </Link>
          <div className="topbar-right">
            <span className="live-dot" aria-hidden="true" />
            <span className="live-label">Live</span>
            <span className="avatar" aria-label="Profilo di Luciano">
              LG
            </span>
          </div>
        </header>

        <main className="content">{children}</main>

        <nav className="bottom-nav" aria-label="Navigazione principale">
          {navItems.map(({ href, label, Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`nav-item${active ? " active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                <Icon size={21} />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
