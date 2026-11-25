"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type PlanName = "Basic" | "Plus" | "Premium";

const rank: Record<PlanName, number> = { Basic: 0, Plus: 1, Premium: 2 };

type PlanContextValue = {
  plan: PlanName;
  ready: boolean;
  setPlan: (plan: PlanName) => void;
  canAccess: (required: PlanName) => boolean;
};

const PlanContext = createContext<PlanContextValue>({
  plan: "Basic",
  ready: false,
  setPlan: () => {},
  canAccess: () => false,
});

const STORAGE_KEY = "wattlysaver-plan";

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlanState] = useState<PlanName>("Basic");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as PlanName | null;
      if (stored && stored in rank) setPlanState(stored);
    } catch {
      // Storage non disponibile: si mantiene il piano base.
    }
    setReady(true);
  }, []);

  const setPlan = (next: PlanName) => {
    setPlanState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Il piano resta attivo per la sessione corrente.
    }
  };

  return (
    <PlanContext.Provider
      value={{ plan, ready, setPlan, canAccess: (required) => rank[plan] >= rank[required] }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}
