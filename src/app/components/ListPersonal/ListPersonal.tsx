"use client";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "../../page.module.css";
import { PersonalxProyecto } from "@/utils/interfaces/interface";
import { useState } from "react";
import Link from "next/link";

type ListPersonalProps = {
  personal: PersonalxProyecto[] | undefined;
};

export default function ListPersonal({ personal }: ListPersonalProps) {
  const typeOfCharge: Array<keyof PersonalxProyecto> = [
    "coordinador",
    "ConsultorAsociado",
    "Investigador",
    "SubCoordinador",
  ];
  const typeOfChargeObject: { [key in keyof PersonalxProyecto]?: string } = {
    coordinador: "Coordinador",
    ConsultorAsociado: "Consultor Asociado",
    Investigador: "Investigador",
    SubCoordinador: "Subcoordinador",
  };

  const [value, setValue] = useState<number | undefined>(3);
  const [isOpen, setIsOpen] = useState(false);

  const getChargeOfPersonal = (autor: PersonalxProyecto): any[] => {
    const result: any = [];
    typeOfCharge.forEach((charge) => {
      if (autor[charge]) {
        result.push(typeOfChargeObject[charge]);
      }
    });
    return result;
  };

  return (
    <Card
      sx={{
        maxWidth: {
          xl: "20rem",
        },
      }}
      className={styles.cardContainer}
    >
      <Card
        sx={{
          minWidth: 275,
        }}
        variant="elevation"
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Typography variant="h5" component="div">
            Autores
          </Typography>
        </CardContent>
      </Card>
      {personal
        ?.map((autor: PersonalxProyecto, i: number) => (
          <Card
            key={i}
            sx={{ minWidth: 275, display: "flex" }}
            variant="outlined"
          >
            <Link href="https://www.google.com" target="_blank">
              <CardMedia
                sx={{
                  height: 100,
                  width: 100,
                  margin: 1,
                  borderRadius: "1rem",
                }}
                image={autor.personal.foto || ""}
                component="img"
              />
            </Link>
            <CardContent>
              <Typography
                variant="h5"
                key={i}
                sx={{
                  fontSize: 20,
                  height: "auto",
                  width: "10rem",
                }}
                component="div"
              >
                {autor.personal.nombre}
              </Typography>
              <Typography variant="h1" sx={{ fontSize: 15 }}>
                {getChargeOfPersonal(autor).map((a) => (
                  <div key={a}>
                    <span key={a}>{a}</span>
                    <br />
                  </div>
                ))}
              </Typography>
            </CardContent>
          </Card>
        ))
        .slice(0, value)}
      <Card>
        {personal && personal.length >= 3 && !isOpen ? (
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 2,
            }}
          >
            <Typography sx={{ fontSize: 15 }} component="div">
              <Button
                onClick={() => {
                  setValue(personal?.length);
                  setIsOpen(true);
                }}
              >
                Ver más
              </Button>
            </Typography>
          </CardContent>
        ) : (
          <div></div>
        )}
      </Card>
    </Card>
  );
}
