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

  const { dataLoaded, setDataLoaded, setProjects } = useAppContext();
  const [areas, setAreas] = useState<Area[]>([]);
  const [personal, setPersonal] = useState<Personal[]>([]);
  const [listCards, setListCards] = useState<ListCardstype>([]);

  useEffect(() => {
    const filters = JSON.parse(localStorage.getItem("filters") || "{}");
    const fetchProjects = async () => {
      setDataLoaded(false);
      const projects = getProjectsFiltered(
        filters.area,
        filters.departamento,
        filters.personal,
        filters.anio,
        5,
        5
      );
      const areas = getAreas();
      const personal = getPersonal();
      const cards = getDataForCards(0, 3);
      Promise.all([projects, areas, personal, cards]).then((response) => {
        setProjects(response[0].projects);
        setAreas(response[1]);
        setPersonal(response[2]);
        setListCards(response[3]);
        setDataLoaded(true);
        // localStorage.setItem("dataLoaded", "true");
      });
    };
    fetchProjects();
  }, []);

  return {
    dataLoaded,
    areas,
    personal,
    listCards,
  };
}
