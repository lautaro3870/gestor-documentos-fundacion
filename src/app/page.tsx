"use client"
import Filter from "./components/Filter/Filter";
import ListProjects from "./components/ListProjects/ListProjects";
import Paginator from "./components/Pagination/Paginator";
import styles from "./page.module.css";
import ListCards from "@/app/components/ListCards/ListCards";
import { CircularProgress } from "@mui/material";
import MainPageHook from "./hooks/MainPageHook/MainPageHook";
import Footer from "./components/Footer/Footer";

export default function MainPage() {
  const { areas, dataLoaded, listCards, personal, projects } = MainPageHook();

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
            <ListProjects projects={projects}/>
          </div>
          <div className={styles.paginator}>
            <Paginator />
          </div>
          <Footer  />
        </div>
      ) : (
        <CircularProgress size="3rem" />
      )}
    </main>
  );
}
