import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2">Thompson Codes is</Typography>
        <Typography variant="h4">Bryan Thompson, Co-founder</Typography>
        <Typography variant="h4">Traci Thompson, Co-founder</Typography>
      </Box>
    </>
  );
};

export default About;
