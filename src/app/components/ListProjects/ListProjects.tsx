"use client";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { ListCardsStruct } from "@/utils/interfaces/interface";
import { getDataForCards } from "@/actions/getDataFromDB";

export default function MediaCard() {
  const [projects, setProjects] = useState<ListCardsStruct[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getDataForCards(5, 5);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const getPersonalList = (card: ListCardsStruct) => {
    return card?.personal.map((p, index) => (
      <span key={index}>
        {p.personal.nombre.replace(",", "")}
        {index === card.personal.length - 1 ? "" : ", "}
      </span>
    ));
  };

  return (
    <div>
      {projects.map((project: ListCardsStruct, index: number) => (
        <Card
          sx={{
            maxWidth: 900,
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "12rem",
          }}
          key={index}
        >
          <CardMedia
            component="img"
            sx={{ height: 100, width: 200, objectFit: "contain" }}
            image="https://fundacionbariloche.org.ar/wp-content/uploads/2024/07/pdf.png"
          />
          <CardContent sx={{
            width: "40rem"
          }}>
            <Typography gutterBottom variant="h5" component="div">
              {project.titulo}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {getPersonalList(project)}
            </Typography>
          </CardContent>
          <div
            style={{
              marginRight: "1rem",
            }}
          >
            <Button>
              <AddIcon />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
