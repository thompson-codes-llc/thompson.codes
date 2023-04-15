import { Typography } from "@mui/material";
import React from "react";

export const MenuBottom = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        marginTop: {
          xs: "10%",
          lg: "-20%",
        },
        marginLeft: {
          xs: "15%",
          lg: "30%",
        },
        marginBottom: {
          xs: "150%",
        },
        fontSize: {
          xs: "60px",
          sm: "90px",
        },
        color: "white",
      }}
    >
      Codes
    </Typography>
  );
};
