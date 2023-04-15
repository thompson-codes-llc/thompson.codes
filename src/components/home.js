import { Box } from "@mui/material";
import React, { useState } from "react";
import { MenuContainer } from "./menuContainer";
import { BottomContainer } from "./bottomContainer";

export const Home = () => {
  const [display, setDisplay] = useState("menu");

  return (
    <Box
      id="layout-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        maxWidth: "100%",
      }}
    >
      <Box
        id="top-container"
        sx={{
          backgroundColor: "white",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "center",
          },
          flex: { xs: 1.5, sm: 2, md: 3 },
          minHeight: { lg: "700px" },
          minWidth: "750px",
          width: {
            xs: "775px",
            sm: "1250px",
            md: "1400px",
            lg: "2000px",
          },
          marginLeft: {
            xs: "-130px",
            sm: "-155px",
            md: "-175px",
            lg: "-195px",
          },
          top: { xs: "-15%", sm: "-25%", md: "-25%", lg: "-50%" },
          transform: { xs: "rotate(-20deg)", sm: "rotate(-20deg)" },
        }}
      >
        <MenuContainer display={display} setDisplay={setDisplay} />
      </Box>

      <Box
        id="bottom-container"
        sx={{
          backgroundColor: "black",
          flex: 1,
          display: "flex",
          justifyContent: { xs: "center", sm: "end" },
          minWidth: "750px",
          width: "100%",
        }}
      >
        <BottomContainer display={display} />
      </Box>
    </Box>
  );
};
