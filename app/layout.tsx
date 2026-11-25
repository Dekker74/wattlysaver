import type { Metadata, Viewport } from "next";
import AppShell from "@/components/AppShell";
import { PlanProvider } from "@/lib/plan";
import "./globals.css";

export const metadata: Metadata = {
  title: "WattlySaver — La tua energia, sotto controllo",
  description:
    "Monitora consumi, budget e programmi ECO in un'unica app energetica semplice e intelligente.",
  applicationName: "WattlySaver",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7848da",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <PlanProvider>
          <AppShell>{children}</AppShell>
        </PlanProvider>
      </body>
    </html>
  );
}
