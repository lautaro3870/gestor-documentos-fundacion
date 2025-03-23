"use client";
import { useEffect, useState } from "react";
import {
  getAreas,
  getDataForCards,
  getPersonal,
  getProjectsFiltered,
} from "@/actions/getDataFromDB";
import { Area, ListCardsStruct, Personal } from "@/utils/interfaces/interface";
import { useAppContext } from "@/context";

export default function MainPageHook() {
  type ListCardstype = ListCardsStruct[];

  const {
    dataLoaded,
    setDataLoaded,
    setProjects,
    setFilters,
    projects,
    setIsLoading,
    setPaginator,
  } = useAppContext();
  const [areas, setAreas] = useState<Area[]>([]);
  const [personal, setPersonal] = useState<Personal[]>([]);
  const [listCards, setListCards] = useState<ListCardstype>([]);

  useEffect(() => {
    const storedFilters = JSON.parse(localStorage.getItem("filters") || "{}");
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...storedFilters,
    }));

    const fetchProjects = async () => {
      setDataLoaded(false);
      const projects = getProjectsFiltered(
        storedFilters.titulo || "",
        storedFilters.area || [],
        storedFilters.departamento || "",
        storedFilters.personal || [],
        storedFilters.anio || [],
      );
      const areas = getAreas();
      const personal = getPersonal();
      const pageNumber = Math.floor(Math.random() * 21);
      const cards = getDataForCards(pageNumber, 9);
      Promise.all([projects, areas, personal, cards]).then((response) => {
        setProjects(response[0].projects);
        setAreas(response[1]);
        setPersonal(response[2]);
        setListCards(response[3]);
        setDataLoaded(true);
        setIsLoading(false);
        setPaginator(response[0].projects.length);
        localStorage.setItem("dataLoaded", "true");
      });
    };
    fetchProjects();
  }, []);

  return {
    dataLoaded,
    areas,
    personal,
    listCards,
    projects,
  };
}
