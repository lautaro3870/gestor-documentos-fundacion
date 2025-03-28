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
  dataLoaded: boolean;
  setDataLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isEmpty: boolean;
  setIsEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  projects: [],
  setProjects: () => {},
  paginator: 0,
  setPaginator: () => {},
  page: 1,
  setPage: () => {},
  filters: {
    titulo: "",
    anio: [],
    area: [],
    departamento: "",
    personal: [],
  },
  setFilters: () => {},
  dataLoaded: false,
  setDataLoaded: () => {},
  isLoading: true,
  setIsLoading: () => {},
  isEmpty: false,
  setIsEmpty: () => {},
});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [projects, setProjects] = useState<ListCardsStruct[]>([]);
  const [paginator, setPaginator] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<FilterProp>({
    titulo: "",
    anio: [],
    area: [],
    departamento: "",
    personal: [],
  });
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

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
        dataLoaded,
        setDataLoaded,
        isLoading,
        setIsLoading,
        isEmpty,
        setIsEmpty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
