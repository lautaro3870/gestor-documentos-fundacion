"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Checkbox, Grid2, ListItemText } from "@mui/material";
import styles from "./filter.module.css";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import FilterHook from "@/app/hooks/FilterHook/FilterHook";
import { Personal } from "@/utils/interfaces/interface";
import { MenuProps } from "@/utils/constants";
import Grid from "@mui/material/Grid2";

export default function Filter() {
  const {
    areas,
    personal,
    listYears,
    filter,
    handleChangeFilter,
    submitFilter,
    handleCleanFilters,
  } = FilterHook();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Grid size={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Areas</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              value={filter.area}
              label="Areas"
              onChange={(e) => handleChangeFilter(e, "area")}
              input={<OutlinedInput id="select-multiple-chip" label="Area" />}
              renderValue={(selected) => selected.map(id => {
                const areaObj = areas.find(area => area.id === id);
                return areaObj ? areaObj.area : '';
              }).join(', ')}
              MenuProps={MenuProps}
            >
              <MenuItem value="">Area</MenuItem>
              {areas.map((area: any, i: number) => (
                <MenuItem key={i} value={area.id}>
                  <Checkbox checked={filter.area.indexOf(area.id) > -1} />
                  <ListItemText primary={area.area}/>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Departamentos</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter.departamento}
              label="Departamentos"
              onChange={(e) => handleChangeFilter(e, "departamento")}
            >
              <MenuItem value="">Departamentos</MenuItem>
              <MenuItem value={"ENERGIA"}>Energía</MenuItem>
              <MenuItem value={"MADE"}>MADE</MenuItem>
              <MenuItem value={"ASC"}>ASC</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Autores</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter.personal}
              label="Autores"
              onChange={(e) => handleChangeFilter(e, "personal")}
              renderValue={(selected) => selected.map(id => {
                const personalObj = personal.find(p => p.id === id);
                return personalObj ? personalObj.nombre : '';
              }).join(', ')}
              MenuProps={MenuProps}
            >
              <MenuItem value="">Autores</MenuItem>
              {personal.map((p: Personal, i: number) => (
                <MenuItem key={i} value={p.id}>
                  <Checkbox checked={filter.personal.indexOf(p.id) > -1} />
                  <ListItemText primary={p.nombre}/>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={1}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Año</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter.anio}
              label="Año"
              onChange={(e) => handleChangeFilter(e, "anio")}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              <MenuItem value={0}>Año</MenuItem>
              {listYears.map((year: number, index: number) => (
                <MenuItem key={index} value={year}>
                  <Checkbox checked={filter.anio.indexOf(year) > -1} />
                  <ListItemText primary={year}/>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xl: 2}}>
          <Button
            variant="outlined"
            style={{ height: "3.5rem" }}
            onClick={submitFilter}
          >
            Filtrar
          </Button>
          <Button
            variant="outlined"
            color="error"
            style={{ height: "3.5rem" }}
            onClick={handleCleanFilters}
          >
            Limpiar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
