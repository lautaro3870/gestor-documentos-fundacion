import { SelectChangeEvent } from "@mui/material";
import {
  getProjectsFiltered,
} from "@/actions/getDataFromDB";
import { FilterProp } from "@/utils/interfaces/interface";
import { generateArrayOfYears } from "@/utils/methods/serviceUtils";
import { useAppContext } from "@/context";

export default function FilterHook() {
  const { setPaginator, setProjects, page, filters, setFilters, setPage } =
    useAppContext();

  const listYears = generateArrayOfYears();

  const handleChangeFilter = (
    event: SelectChangeEvent<number[] | string | number>,
    filterType: keyof FilterProp
  ) => {
    const { value } = event.target;

    setFilters((prevFilter: any) => {
      if (
        filterType === "area" ||
        filterType === "personal" ||
        filterType === "anio"
      ) {
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
    await make();
  };

  const make = async () => {
    const { projects, projectsCount } = await getProjectsFiltered(
      filters.area,
      filters.departamento,
      filters.personal,
      filters.anio,
      5,
      page
    );
    setProjects(projects);
    setPaginator(projectsCount);
  };

  const handleCleanFilters = async (e: any) => {
    e.preventDefault();
    setFilters({
      area: [],
      departamento: "",
      personal: [],
      anio: [],
    });
    const { projects, projectsCount } = await getProjectsFiltered([], "", [], [], 5, 5);
    setProjects(projects);
    setPage(1);
    setPaginator(projectsCount);
  };

  return {
    filters,
    setFilters,
    handleChangeFilter,
    submitFilter,
    handleCleanFilters,
    listYears,
    make
  };
}
