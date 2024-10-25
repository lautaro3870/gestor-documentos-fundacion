import Filter from "./components/Filter/Filter";
import MediaCard from "./components/ListProjects/ListProjects";
import Paginator from "./components/Pagination/Paginator";
import styles from "./page.module.css";
import ListCards from "@/app/components/ListCards/ListCards";

export default function MainPage() {
  return (
    <main>
      <div className={styles.div1}>
        <div style={{ width: "70rem" }}>
          <ListCards />
        </div>
      </div>
      <div className={styles.div2}>
        <Filter />
      </div>
      <div className={styles.projects}>
        <MediaCard />
      </div>
      <div className={styles.paginator}>
        <Paginator />
      </div>
    </main>
  );
}
