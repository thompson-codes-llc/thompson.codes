import { Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

export const About = (color) => {
  return (
    <>
      <Typography sx={{ textAlign: "center", color: color }} variant="h4">
        We aim to provide quality web development services to small businesses
        in Central Oregon
      </Typography>
    </>
  );
};
