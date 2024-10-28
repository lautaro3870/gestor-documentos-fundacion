"use client";
import { getProjectById } from "@/actions/getDataFromDB";
import { ListCardsStruct } from "@/utils/interfaces/interface";
import { useEffect, useState } from "react";
import styles from "../../page.module.css";
import { Box, Typography } from "@mui/material";
import ListPersonal from "@/app/components/ListPersonal/ListPersonal";
import DownloadLink from "@/app/components/DownloadLink/DownloadLink";
import Grid from "@mui/material/Grid2";

export default function Project({ params }: { params: { id: string } }) {
  const [project, setProject] = useState<ListCardsStruct>({
    id: 0,
    activo: false,
    anio_finalizacion: 0,
    anio_inicio: 0,
    areas: [],
    descripcion: "",
    cita: "",
    departamento: "",
    mes_finalizacion: 0,
    mes_inicio: 0,
    pdf: "",
    personal: [],
    titulo: "",
  });

  useEffect(() => {
    const getProject = async () => {
      const project = await getProjectById(parseInt(params.id));
      if (project) {
        setProject(project);
      }
    };
    getProject();
  }, []);

  const getAreasList = (card: ListCardsStruct) => {
    return card?.areas.map((a, index) => (
      <div
        style={{
          border: "solid",
          borderWidth: 2,
          borderRadius: "0.2rem",
          borderColor: "gray",
          margin: 2,
          padding: 2,
        }}
      >
        <Typography align="center" sx={{ fontSize: 16 }} key={index}>
          {a.area.area}
        </Typography>
      </div>
    ));
  };

  return (
    <Grid
      container
      spacing={2}
      className={styles.projectContainer}
      justifyContent="center"
      alignItems="flex-start"
    >
      {/* Columna principal del título y las áreas */}
      <Grid
        size={{ xs: 12, md: 8, lg: 8 }}
        style={{ marginLeft: "12rem", marginRight: "5rem" }}
      >
        <Typography gutterBottom sx={{ color: "text.primary", fontSize: 30 }}>
          {project?.titulo}
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginBottom: 2 }}
        >
          {getAreasList(project)}
        </Box>
        {project.pdf && <DownloadLink project={project} />}
      </Grid>

      <Grid size={{ xs: 12, md: 8, lg: 6 }} sx={{ marginTop: "3rem" }}>
        <Box sx={{ width: "40rem", marginLeft: "18rem" }}>
          <Typography variant="h5" sx={{ fontSize: 25 }}>
            Descripción
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 20 }} align="justify">
            {project.descripcion}
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={{ xs: 12, md: 4, lg: 4 }}
        sx={{ marginTop: "-18rem", marginLeft: "15rem" }}
      >
        <ListPersonal personal={project?.personal} />
      </Grid>
    </Grid>
  );
}
