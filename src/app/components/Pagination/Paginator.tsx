"use client";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppContext } from "@/context";
import { useMediaQuery } from "@mui/material";

export default function Paginator() {
  const { paginator, setPage, page } = useAppContext();
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({
      top: !isMobile ? 0 : document.body.scrollHeight / 3.5,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Stack spacing={3}>
      <Pagination
        count={Math.round(paginator / 5)}
        page={page}
        color="primary"
        onChange={handleChange}
      />
    </Stack>
  );
}
