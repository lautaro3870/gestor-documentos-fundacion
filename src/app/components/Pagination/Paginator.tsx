"use client";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppContext } from "@/context";
import { getTotalProjectsCount } from "@/actions/getDataFromDB";

export default function Paginator() {
  const { paginator, setPaginator, setPage, page } = useAppContext();

  React.useEffect(() => {
    const fetchData = async() => {
      const count = await getTotalProjectsCount();
      setPaginator(count);
    };
    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={3}>
      <Pagination count={Math.round(paginator / 5)} page={page} color="primary" onChange={handleChange}/>
    </Stack>
  );
}
