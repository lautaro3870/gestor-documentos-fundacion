"use client"
import { ListCardsStruct } from "@/utils/interfaces/interface";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  projects: ListCardsStruct[];
  setProjects: React.Dispatch<React.SetStateAction<ListCardsStruct[]>>;
}>({
  projects: [], 
  setProjects: () => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [projects, setProjects] = useState<ListCardsStruct[]>([]);

  return (
    <AppContext.Provider value={{ projects, setProjects }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
