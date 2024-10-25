"use client";
import { useAppContext } from "@/context";
import Filter from "./components/Filter/Filter";
import ListProjects from "./components/ListProjects/ListProjects";
import Paginator from "./components/Pagination/Paginator";
import styles from "./page.module.css";
import ListCards from "@/app/components/ListCards/ListCards";
import { useEffect, useState } from "react";
import {
  getAreas,
  getDataForCards,
  getPersonal,
} from "@/actions/getDataFromDB";
import { Area, ListCardsStruct, Personal } from "@/utils/interfaces/interface";
import { CircularProgress } from "@mui/material";

type ListCardstype = ListCardsStruct[];

export default function MainPage() {
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

  return (
    <main className={dataLoaded ? "" : styles.mainLoading}>
      {dataLoaded ? (
        <div>
          <div className={styles.div1}>
            <div style={{ width: "70rem" }}>
              <ListCards listCards={listCards} />
            </div>
          </div>
          <div>
            <Filter areas={areas} personal={personal} />
          </div>
          <div className={styles.projects}>
            <ListProjects />
          </div>
          <div className={styles.paginator}>
            <Paginator />
          </div>
        </div>
      ) : (
        <CircularProgress size="3rem" />
      )}
    </main>
  );
}
