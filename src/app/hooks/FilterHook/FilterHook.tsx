"use client";

import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getAreas,
  getPersonal,
  getProjectsFiltered,
} from "@/actions/getDataFromDB";
import { Area, FilterProp, Personal } from "@/utils/interfaces/interface";
import { generateArrayOfYears } from "@/utils/methods/serviceUtils";
import { useAppContext } from "@/context";

export default function FilterHook() {

  const { projects, setProjects} = useAppContext();

  const [areas, setAreas] = useState<Area>([]);
  const [personal, setPersonal] = useState<Personal[]>([]);
  const listYears = generateArrayOfYears();

  const [filter, setFilter] = useState<FilterProp>({
    area: [],
    departamento: "",
    personal: [],
    anio: [],
  });

  const handleChangeFilter = (
    event: SelectChangeEvent<number[] | string | number>,
    filterType: keyof FilterProp
  ) => {
    const { value } = event.target;

    setFilter((prevFilter: any) => {
      if (filterType === "area" || filterType === "personal" || filterType === "anio") {
        if (value !== "") {
          const selectedItems = prevFilter[filterType];
          if (selectedItems.includes(value)) {
            return {
              ...prevFilter,
              [filterType]: selectedItems.filter((item: any) => item !== value),
            };
          } else {
            return {
              ...prevFilter,
              [filterType]: [...selectedItems, value],
            };
          }
        } else {
          return {
            ...prevFilter,
            [filterType]: [],
          };
        }
      } else if (filterType === "departamento") {
        return {
          ...prevFilter,
          [filterType]: value,
        };
      } else {
        return prevFilter;
      }
    });
  };

  const submitFilter = async (e: any) => {
    e.preventDefault();
    const data = await getProjectsFiltered(
      filter.area,
      filter.departamento,
      filter.personal,
      filter.anio,
      5,
      5
    );
    setProjects(data);
  };

  useEffect(() => {
    const fetchAreas = async () => {
      const data = await getAreas();
      setAreas(data);
    };
    const fetchPersonal = async () => {
      const personal = await getPersonal();
      setPersonal(personal);
    };
    fetchAreas();
    fetchPersonal();
  }, []);

  const handleCleanFilters = async (e: any) => {
    e.preventDefault();
    setFilter({
      area: [],
      departamento: "",
      personal: [],
      anio: []
    });
    const data = await getProjectsFiltered([], "", [], [], 5, 5);
    setProjects(data);
  };

  return {
    areas,
    setAreas,
    personal,
    setPersonal,
    filter,
    setFilter,
    handleChangeFilter,
    submitFilter,
    handleCleanFilters,
    listYears
  };
}
