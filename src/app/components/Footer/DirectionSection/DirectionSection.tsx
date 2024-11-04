import { Box, Typography } from "@mui/material";
import SeparatorLine from "../SeparatorLine/SeparatorLine";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

export default function DirectionSection() {
  return (
    <Grid
      sx={{
        xl: 6,
        xs: 12,
        lg: 6,
      }}
      display="flex"
      flexDirection={{
        xl: "row",
        xs: "column",
      }}
      margin={{
        xs: "1rem",
        xl: 0,
      }}
    >
      <Grid
        sx={{
          xl: 2,
          xs: 12,
          lg: 2,
          marginRight: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            width: "auto",
          }}
        >
          <Typography variant="h6">Sede Central Bariloche</Typography>
          <Box sx={{ marginTop: "0.5rem" }}>
            <Typography sx={{ fontSize: 18 }} variant="h6">
              Dirección
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Av. Bustillo 9500, R8402AGP, San Carlos de Bariloche, Río Negro
            </Typography>
          </Box>
          <Box sx={{ marginTop: "0.5rem" }}>
            <Typography sx={{ fontSize: 18 }} variant="h6">
              Contacto
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              +54 294 446 2500 / 1186
            </Typography>
          </Box>
          <Box sx={{ marginTop: "0.5rem" }}>
            <Typography sx={{ fontSize: 18 }} variant="h6">
              Email
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              <Link href="mailto:info@fundacionbariloche.org.ar">
                info@fundacionbariloche.org.ar
              </Link>
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              <Link href="mailto:idee@fundacionbariloche.org.ar">
                idee@fundacionbariloche.org.ar
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <SeparatorLine />
      <Grid
        sx={{
          xl: 2,
          xs: 12,
          lg: 2,
          marginLeft: {
            xl: "1rem",
          },
          marginTop: {
            xs: "1rem",
            xl: 0,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            width: "auto",
          }}
        >
          <Typography variant="h6">Buenos Aires</Typography>
          <Box sx={{ marginTop: "0.5rem" }}>
            <Typography sx={{ fontSize: 18 }} variant="h6">
              Dirección
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              Piedras 482 2do H, C1070AAJ, CABA
            </Typography>
          </Box>
          <Box sx={{ marginTop: "0.5rem" }}>
            <Typography sx={{ fontSize: 18 }} variant="h6">
              Contacto
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              +54 11 4331-1816 /1649
            </Typography>
          </Box>
          <Box sx={{ marginTop: "0.5rem" }}>
            <Typography sx={{ fontSize: 18 }} variant="h6">
              Email
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              <Link href="mailto:info@fundacionbariloche.org.ar">
                info@fundacionbariloche.org.ar
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
