import { Box, Typography } from "@mui/material";
import SeparatorLine from "../SeparatorLine/SeparatorLine";
import Grid from "@mui/material/Grid2";

export default function DirectionSection() {
  return (
    <Grid
      sx={{
        xl: 2,
        xs: 12,
        lg: 2,
      }}
    >
      <Grid
        sx={{
          xl: 2,
          xs: 12,
          lg: 2,
          margin: {
            xs: "1rem",
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            width: "auto",
            marginRight: "1rem",
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
              info@fundacionbariloche.org.ar
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              idee@fundacionbariloche.org.ar
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
            xs: "1rem",
            xl: "4rem",
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
              info@fundacionbariloche.org.ar
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
