import Filter from "./components/Filter/Filter";
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
    </main>
  );
}
