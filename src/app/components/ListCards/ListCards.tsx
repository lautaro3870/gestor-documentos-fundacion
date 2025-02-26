import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button } from "@mui/material";
import { ListCardsStruct } from "@/utils/interfaces/interface";
import { getMonthByNumber } from "@/utils/methods/serviceUtils";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

type ListCardsProps = {
  listCards: ListCardsStruct[];
};

export default function ListCards({ listCards }: ListCardsProps) {
  const getPersonalList = (card: ListCardsStruct) => {
    return card?.personal.map((p, index) => (
      <span key={index}>
        {p.personal.nombre.replace(",", "")}
        {index === card.personal.length - 1 ? "" : ", "}
      </span>
    ));
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {listCards?.map((card, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card
              key={index}
              sx={{
                height: "25rem",
                paddingBottom: "1rem",
                "&:hover": {
                  backgroundColor: "#1e88e5",
                  "& .card-title": {
                    color: "white",
                    transition: "color 0.5s ease",
                  },
                  "& .card-personal": {
                    color: "white",
                    transition: "color 0.5s ease",
                  },
                  "& .card-year": {
                    color: "white",
                  },
                  "& .card-button": {
                    color: "white",
                    transition: "color 0.5s ease",
                  },
                  "& .card-button:hover": {
                    transform: "scale(2)",
                    transition: "transform 0.5s ease"
                  },
                },
                "& .card-title, & .card-personal, & .card-year, & .card-button": {
                  transition: "color 0.5s ease, transform 0.5s ease",
                },
              }}
            >
              <CardContent key={index}>
                <Typography
                  className="card-year"
                  variant="body2"
                  sx={{ color: "text.primary" }}
                >
                  <span>
                    {" "}
                    {getMonthByNumber(card.mes_inicio || -1)?.mes}{" "}
                    {card.anio_inicio}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  className="card-title"
                  sx={{
                    color: "text.primary",
                    height: "10rem",
                    fontSize: {
                      xl: "1.2rem",
                      lg: "1.2rem",
                      md: "1.1rem",
                      sm: "1.1rem",
                      xs: "1.1rem",
                    },
                  }}
                >
                  {card.titulo}
                </Typography>

                <Grid container spacing={2} sx={{ marginTop: "7rem" }}>
                  <Grid
                    size={9}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      className="card-personal"
                      sx={{ color: "text.secondary" }}
                    >
                      {getPersonalList(card)}
                    </Typography>
                  </Grid>
                  <Grid size={3}>
                    <Link href={`/project/${card.id}`}>
                      <Button className="card-button">
                        <AddIcon />
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
