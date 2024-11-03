import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function FormSection() {
  return (
    <div>
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
          <FormControl sx={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="name">Nombre</InputLabel>
            <Input
              id="name"
              color="primary"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <FormControl sx={{ marginTop: "1rem" }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              color="primary"
              aria-describedby="my-helper-text"
            />
          </FormControl>
          <Button sx={{ marginTop: "1rem" }} variant="contained">
            Enviar
          </Button>
        </Box>
      </Grid>
    </div>
  );
}
