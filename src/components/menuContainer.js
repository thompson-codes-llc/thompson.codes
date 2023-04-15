import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Menu } from "./menu";
import About from "../pages/about";
import Contact from "../pages/contact";

export const MenuContainer = () => {
  const [display, setDisplay] = useState("menu");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        // height: "100%",
        // alignItems: "start",
        justifyContent: "end",
      }}
    >
      <Box
        id="top-content"
        sx={{
          minWidth: "30%",
          width: { lg: "100%" },
          transform: { xs: "rotate(20deg)", sm: "rotate(20deg)" },
          marginLeft: { xs: "20%", sm: "15%", md: "20%", lg: "15%" },
          marginTop: {
            xs: "20%",
            sm: "40%",
            lg: "20%",
          },
        }}
      >
        {display === "menu" && <Menu setDisplay={setDisplay} />}
        {display === "about" && <About setDisplay={setDisplay} />}
        {display === "contact" && <Contact setDisplay={setDisplay} />}
      </Box>
    </Box>
  );
};
