"use client"
import {
  getProjectsFiltered,
} from "@/actions/getDataFromDB";
import { FilterProp } from "@/utils/interfaces/interface";
import { generateArrayOfYears } from "@/utils/methods/serviceUtils";
import { useAppContext } from "@/context";

export default function FilterHook() {
  const { setPaginator, setProjects, filters, setFilters, setPage, setIsLoading, projects } =
    useAppContext();

  const listYears = generateArrayOfYears();

  const handleChangeFilter = (
    event: { target: { value: number[] | string | number } },
    filterType: keyof FilterProp
  ) => {
    const { value } = event.target;

    setFilters((prevFilter: any) => {
      if (
        filterType === "area" ||
        filterType === "personal" ||
        filterType === "anio"
      ) {
        if (Array.isArray(value)) {
          return {
            ...prevFilter,
            [filterType]: value,
          };
        } else {
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
    await getProjects();
  };

  const getProjects = async () => {
    localStorage.setItem("filters", JSON.stringify(filters));
    setIsLoading(true);
    const { projects, projectsCount } = await getProjectsFiltered(
      filters.area,
      filters.departamento,
      filters.personal,
      filters.anio,
    );
    setProjects(projects);
    setPaginator(projectsCount);
    setIsLoading(false);
  };

  const handleCleanFilters = async (e: any) => {
    const filters: FilterProp = {
      anio: [],
      area: [],
      departamento: "",
      personal: [],
    };
    localStorage.setItem("filters", JSON.stringify(filters));
    e.preventDefault();
    setIsLoading(true);
    setFilters({
      area: [],
      departamento: "",
      personal: [],
      anio: [],
    });
    const { projects, projectsCount } = await getProjectsFiltered([], "", [], []);
    setProjects(projects);
    setPage(1);
    setPaginator(projectsCount);
    setIsLoading(false);
  };

  return {
    filters,
    setFilters,
    handleChangeFilter,
    submitFilter,
    handleCleanFilters,
    listYears,
    getProjects,
    projects
  };
}
