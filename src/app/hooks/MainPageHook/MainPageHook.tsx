"use client";
import { useEffect, useState } from "react";
import {
  getAreas,
  getDataForCards,
  getPersonal,
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
    const fetchProjects = async () => {
      setDataLoaded(false);
      const projects = getDataForCards(5, 5);
      const areas = getAreas();
      const personal = getPersonal();
      const cards = getDataForCards(0, 3);
      Promise.all([projects, areas, personal, cards]).then((response) => {
        setProjects(response[0]);
        setAreas(response[1]);
        setPersonal(response[2]);
        setListCards(response[3]);
        setDataLoaded(true);
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
