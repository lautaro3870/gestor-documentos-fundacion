import { Box } from "@mui/material";

export default function SeparatorLine() {
  return (
    <Box
      sx={{
        height: "auto",
        border: "solid",
        borderWidth: 1,
        borderColor: "lightgrey",
        display: {
          xs: "none",
          xl: "block",
          md: "block",
          sm: "none"
        },
      }}
    ></Box>
  );
}
