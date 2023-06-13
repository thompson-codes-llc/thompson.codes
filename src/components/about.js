import { Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

export const About = (color) => {
  const styles = {
    color: color,
    fontSize: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2.5rem",
    },
    mx: "20px",
    textAlign: "center",
  };

  return (
    <>
      <Typography sx={{ ...styles }}>
        We aim to provide quality web development services to small businesses
        in Central Oregon
      </Typography>
    </>
  );
};
