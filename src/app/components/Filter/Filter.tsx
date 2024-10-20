"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import styles from "./filter.module.css";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import CancelIcon from "@mui/icons-material/Cancel";
import FilterHook from "@/app/hooks/FilterHook/FilterHook";
import { Personal } from "@/utils/interfaces/interface";
import { MenuProps } from "@/utils/constants";

export default function Filter() {
  const {
    areas,
    personal,
    listYears,
    filter,
    handleChangeFilter,
    submitFilter,
    handleDelete,
    handleCleanFilters,
  } = FilterHook();

  return (
    <div className={styles.div1}>
      <div style={{ display: "flex", gap: "1rem", flexGrow: 1, width: "70rem" }}>
        <FormControl style={{width: "20rem"}}>
          <InputLabel id="demo-simple-select-label">Areas</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.area}
            label="Areas"
            onChange={(e) => handleChangeFilter(e, "area")}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected: any) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip
                    key={value}
                    label={
                      areas.find((area) => area.id === value)?.area || value
                    }
                    onDelete={() => handleDelete(value, "area")}
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            <MenuItem value="">Area</MenuItem>
            {areas.map((area: any, i: number) => (
              <MenuItem key={i} value={area.id}>
                {area.area}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{width: "20rem"}}>
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
        <FormControl style={{width: "20rem"}}>
          <InputLabel id="demo-simple-select-label">Autores</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.personal}
            label="Autores"
            onChange={(e) => handleChangeFilter(e, "personal")}
            renderValue={(selected: any) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip
                    key={value}
                    label={
                      personal.find((p) => p.id === value)?.nombre || value
                    }
                    onDelete={() => handleDelete(value, "personal")}
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            <MenuItem value="">Autores</MenuItem>
            {personal.map((p: Personal, i: number) => (
              <MenuItem key={i} value={p.id}>
                {p.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl style={{width: "20rem"}}>
          <InputLabel id="demo-simple-select-label">Año</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.anio}
            label="Año"
            onChange={(e) => handleChangeFilter(e, "anio")}
            renderValue={(selected: any) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip
                    key={value}
                    label={
                      listYears.find((p) => p === value) || value
                    }
                    onDelete={() => handleDelete(value, "anio")}
                    deleteIcon={
                      <CancelIcon
                        onMouseDown={(event) => event.stopPropagation()}
                      />
                    }
                  />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            <MenuItem value={0}>Año</MenuItem>
            {listYears.map((year: number, index: number) => (
              <MenuItem key={index} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          style={{ width: "10rem", height: "3.5rem" }}
          onClick={submitFilter}
        >
          Filtrar
        </Button>
        <Button
          variant="outlined"
          color="error"
          style={{ width: "10rem", height: "3.5rem" }}
          onClick={handleCleanFilters}
        >
          Limpiar
        </Button>
      </div>
    </div>
  );
}
