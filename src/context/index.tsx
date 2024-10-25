"use client";
import { FilterProp, ListCardsStruct } from "@/utils/interfaces/interface";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  projects: ListCardsStruct[];
  setProjects: React.Dispatch<React.SetStateAction<ListCardsStruct[]>>;
  paginator: number;
  setPaginator: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  filters: FilterProp;
  setFilters: React.Dispatch<React.SetStateAction<FilterProp>>;
}>({
  projects: [],
  setProjects: () => {},
  paginator: 0,
  setPaginator: () => {},
  page: 1,
  setPage: () => {},
  filters: {
    anio: [],
    area: [],
    departamento: "",
    personal: [],
  },
  setFilters: () => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [projects, setProjects] = useState<ListCardsStruct[]>([]);
  let [paginator, setPaginator] = useState<number>(0);
  let [page, setPage] = useState<number>(1);
  let [filters, setFilters] = useState<FilterProp>({
    anio: [],
    area: [],
    departamento: "",
    personal: [],
  });

  return (
    <AppContext.Provider
      value={{
        projects,
        setProjects,
        paginator,
        setPaginator,
        page,
        setPage,
        filters,
        setFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
