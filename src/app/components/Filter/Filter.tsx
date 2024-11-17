"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Autocomplete,
  Button,
  Checkbox,
  Chip,
  ListItemText,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import FilterHook from "@/app/hooks/FilterHook/FilterHook";
import { Area, Personal } from "@/utils/interfaces/interface";
import { MenuProps } from "@/utils/constants";
import Grid from "@mui/material/Grid2";

type FilterProps = {
  areas: Area[];
  personal: Personal[];
};

export default function Filter({ areas, personal }: FilterProps) {
  const {
    listYears,
    filters,
    handleChangeFilter,
    submitFilter,
    handleCleanFilters,
  } = FilterHook();

  const uniqueAreas = areas.filter(
    (area, index, self) => index === self.findIndex((a) => a.area === area.area)
  );

  const uniquePersonal = personal.filter(
    (personal, index, self) =>
      index === self.findLastIndex((p) => p.nombre === personal.nombre)
  );

  return (
    <Box
      sx={{
        width: "80%",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Grid size={{ md: 2, lg: 3, xs: 12 }}>
          <FormControl fullWidth>
            <Autocomplete
              multiple
              id="autocomplete-multiple-checkbox"
              options={uniqueAreas}
              disableCloseOnSelect
              getOptionLabel={(option) => option.area}
              value={areas.filter((area) => filters.area.includes(area.id))}
              onChange={(event, newValue) => {
                const selectedIds = newValue.map((area) => area.id);
                handleChangeFilter({ target: { value: selectedIds } }, "area");
              }}
              renderOption={(props, option, { selected }) => {
                const { key, ...rest } = props;
                return (
                  <li {...rest} key={key}>
                    <Checkbox style={{ marginRight: 8 }} checked={selected} />
                    <ListItemText primary={option.area} />
                  </li>
                );
              }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip label={option.area} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Areas"
                  placeholder="Seleccione"
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid size={{ md: 2, lg: 2, xs: 12 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Departamentos</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filters.departamento}
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
        <Grid size={{ md: 2, lg: 3, xs: 12 }}>
          <FormControl fullWidth>
            <Autocomplete
              multiple
              id="autocomplete-autores-multiple-checkbox"
              options={uniquePersonal}
              disableCloseOnSelect
              getOptionLabel={(option) => option.nombre}
              value={personal.filter((p) => filters.personal.includes(p.id))}
              onChange={(event, newValue) => {
                const selectedIds = newValue.map((personal) => personal.id);
                handleChangeFilter({ target: { value: selectedIds } }, "personal");
              }}
              renderOption={(props, option, { selected }) => {
                const { key, ...rest } = props;
                return (
                  <li {...rest} key={key}>
                    <Checkbox style={{ marginRight: 8 }} checked={selected} />
                    <ListItemText primary={option.nombre} />
                  </li>
                );
              }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip label={option.nombre} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Autores"
                  placeholder="Seleccione"
                />
              )}
            />
          </FormControl>

          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Autores</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filters.personal}
              label="Autores"
              onChange={(e) => handleChangeFilter(e, "personal")}
              renderValue={(selected) =>
                selected
                  .map((id) => {
                    const personalObj = personal.find((p) => p.id === id);
                    return personalObj ? personalObj.nombre : "";
                  })
                  .join(", ")
              }
              MenuProps={MenuProps}
            >
              <MenuItem value="">Autores</MenuItem>
              {personal.map((p: Personal, i: number) => (
                <MenuItem key={i} value={p.id}>
                  <Checkbox checked={filters.personal.indexOf(p.id) > -1} />
                  <ListItemText primary={p.nombre} />
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </Grid>
        <Grid size={{ md: 2, lg: 2, xs: 12 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Año</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filters.anio}
              label="Año"
              onChange={(e) => handleChangeFilter(e, "anio")}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              <MenuItem value={0}>Año</MenuItem>
              {listYears.map((year: number, index: number) => (
                <MenuItem key={index} value={year}>
                  <Checkbox checked={filters.anio.indexOf(year) > -1} />
                  <ListItemText primary={year} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          size={{ md: 2, lg: 2, xs: 12 }}
          sx={{ display: "flex", flexDirection: "row" }}
        >
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
