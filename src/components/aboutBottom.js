import { Typography } from "@mui/material";
import React from "react";

export const AboutBottom = () => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: "white",
        width: "45%",
        textAlign: "center",
        marginBottom: { xs: "15%", lg: 0 },
        marginLeft: { xs: "5%", lg: 0 },
        marginTop: { lg: "-10%" },
      }}
    >
      We aim to provide quality web development services to businesses in
      Central Oregon
    </Typography>
  );
};
