"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";
import { LockIcon } from "./Icons";
import { usePlan, type PlanName } from "@/lib/plan";

export default function PlanGuard({
  required,
  children,
}: {
  required: PlanName;
  children: ReactNode;
}) {
  const { ready, canAccess, plan } = usePlan();
  const router = useRouter();
  const allowed = canAccess(required);

  useEffect(() => {
    if (ready && !allowed) router.replace("/piano");
  }, [ready, allowed, router]);

  if (!ready || !allowed) {
    return (
      <div className="stack">
        <section className="panel locked-panel">
          <span className="service-icon"><LockIcon size={18} /></span>
          <h2>Funzione non inclusa nel tuo piano</h2>
          <p>
            Questa sezione richiede il piano {required}. Il tuo piano attuale è {plan}.
          </p>
          <button type="button" className="toggle-button" onClick={() => router.push("/piano")}>
            Vedi i piani
          </button>
        </section>
      </div>
    );
  }

  return <>{children}</>;
}
