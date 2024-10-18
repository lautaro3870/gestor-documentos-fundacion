"use client";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { getDataForCards } from "@/actions/getDataFromDB";
import { ListCardsStruct } from "@/utils/interfaces/interface";
import { getMonthByNumber } from "@/utils/methods/serviceUtils";

type ListCardstype = ListCardsStruct[] | null;

export default function ListCards() {
  const [listCards, setListCards] = useState<ListCardstype>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataForCards();
      setListCards(data);
    };
    fetchData();
  }, []);

  const getPersonalList = (card: ListCardsStruct) => {
    return card?.personal.map((p, index) => (
      <span key={index}>{p.personal.nombre.replace(",", "")}{index === card.personal.length - 1 ? '' : ', '}</span>
    ));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: "1rem",
        height: "20rem",
      }}
    >
      {listCards?.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: 350,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "85%",
            }}
            key={index}
          >
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              <span>
                {" "}
                {getMonthByNumber(card.mes_inicio || -1)?.mes} {card.anio_inicio}
              </span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mt: "-7rem" }}
            >
              {card.titulo}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: "auto" }}
              >
                {getPersonalList(card)}
              </Typography>
              <Button>
                <AddIcon />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
