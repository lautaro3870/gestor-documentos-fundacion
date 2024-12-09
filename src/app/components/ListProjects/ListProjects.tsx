import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { ListCardsStruct } from "@/utils/interfaces/interface";
import { useAppContext } from "@/context";
import Link from "next/link";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

type ListProjectsProps = {
  projects: ListCardsStruct[]
}

export default function ListProjects({ projects }: ListProjectsProps) {
  const { isLoading, page } = useAppContext();
  const projectsPerPage = 5;
  const [currentProjects, setCurrentProjects] = useState<ListCardsStruct[]>([]);

  const getPersonalList = (card: ListCardsStruct) => {
    return card?.personal.map((p, index) => (
      <span key={index}>
        {p.personal.nombre.replace(",", "")}
        {index === card.personal.length - 1 ? "" : ", "}
      </span>
    ));
  };

  useEffect(() => {
    const currentProjects = projects.slice(
      (page - 1) * projectsPerPage,
      page * projectsPerPage
    );
    setCurrentProjects(currentProjects);
  }, [page])

  useEffect(() => {
    const currentProjects = projects.slice(
      (page - 1) * projectsPerPage,
      page * projectsPerPage
    );
    setCurrentProjects(currentProjects);
  }, [projects])

  return (
    <div>
      {isLoading ? (
        <CircularProgress size="3rem" />
      ) : (
        <div>
          {currentProjects.map((project: ListCardsStruct, index: number) => (
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                height: {
                  lg: "16rem",
                  xs: "20rem",
                },
                width: {
                  lg: "75rem",
                  md: "60rem",
                  xs: "80%",
                  sm: "35rem",
                },
                margin: "auto",
              }}
              key={index}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 100,
                  width: 200,
                  objectFit: "contain",
                  display: {
                    xs: "none",
                    xl: "block",
                    lg: "block",
                  },
                  marginLeft: "1rem",
                }}
                image="https://fundacionbariloche.org.ar/wp-content/uploads/2024/07/pdf.png"
              />
              <CardContent
                sx={{
                  marginRight: "auto",
                  width: {
                    lg: "50rem",
                    xs: "20rem",
                  },
                }}
              >
                <Typography
                  gutterBottom
                  sx={{ fontSize: "1rem" }}
                  component="div"
                >
                  {project.departamento} - {project.anio_inicio}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontSize={{
                    xs: "0.9rem",
                  }}
                >
                  {project.titulo}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    overflow: {
                      xs: "auto",
                    },
                  }}
                >
                  {getPersonalList(project)}
                </Typography>
              </CardContent>
              <div
                style={{
                  marginRight: "1rem",
                }}
              >
                <Link href={`/project/${project.id}`}>
                  <Button>
                    <AddIcon />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
