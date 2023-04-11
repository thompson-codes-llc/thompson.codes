import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
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
