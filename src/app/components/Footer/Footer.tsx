import {
  Box,
  Button,
  CardMedia,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Footer() {
  return (
    <Grid
      container
      spacing={5}
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "4rem",
        marginTop: "4rem",
      }}
    >
      <Grid
        sx={{
          xl: 2,
          xs: 12,
          lg: 2,
        }}
      >
        <CardMedia
          sx={{ width: "auto", height: "auto" }}
          component="img"
          image="https://fundacionbariloche.org.ar/wp-content/uploads/2023/09/LOGO-FB-WEB-1963-150px-e1707943153646.png"
        />
      </Grid>
      <Box
        sx={{
          height: "auto",
          border: "solid",
          borderWidth: "0.1rem",
          borderColor: "gray",
          display: {
            xs: "none",
            xl: "block",
          },
        }}
      ></Box>
      <Grid
        sx={{
          xl: 2,
          xs: 12,
          lg: 2,
          marginLeft: {
            xs: "1rem",
          },
        }}
        display="flex"
        justifyContent="center"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            width: "18rem",
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
      <Box
        sx={{
          height: "auto",
          border: "solid",
          borderWidth: "0.1rem",
          borderColor: "gray",
          display: {
            xs: "none",
            xl: "block",
          },
        }}
      ></Box>
      <Grid
        sx={{
          xl: 2,
          xs: 12,
          lg: 2,
          marginLeft: {
            xs: "1rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "flex-start",
            width: "18rem",
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
      <Box
        sx={{
          height: "auto",
          border: "solid",
          borderWidth: "0.1rem",
          borderColor: "gray",
          display: {
            xs: "none",
            xl: "block",
          },
        }}
      ></Box>
      <Grid
        sx={{
          xl: 2,
          xs: 12,
          lg: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">Contacto</Typography>
          <FormControl sx={{marginTop: "1rem"}}>
            <InputLabel htmlFor="name">Nombre</InputLabel>
            <Input
              id="name"
              color="primary"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl sx={{marginTop: "1rem"}}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              color="primary"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <Button sx={{marginTop: "1rem"}} variant="contained">Enviar</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
