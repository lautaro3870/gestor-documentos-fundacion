import styles from "./page.module.css";
import ListCards from "@/app/components/ListCards/ListCards";

export default function MainPage() {
  return (
    <div className={styles.div1}>
      <ListCards />
    </div>
  );
}
