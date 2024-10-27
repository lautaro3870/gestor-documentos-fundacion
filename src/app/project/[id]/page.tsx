"use client";
import { getProjectById } from "@/actions/getDataFromDB";
import { ListCardsStruct } from "@/utils/interfaces/interface";
import { useEffect, useState } from "react";
import styles from "../../page.module.css";

export default function Project({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<ListCardsStruct | null>(null);
  useEffect(() => {
    const getProject = async () => {
      const project = await getProjectById(parseInt(params.id));
      setProject(project);
    };
    getProject();
  }, []);

  return (
    <div className={styles.div1}>
      <div style={{ width: "70rem" }}>
        <h1>{project?.titulo}</h1>
      </div>
    </div>
  );
}
