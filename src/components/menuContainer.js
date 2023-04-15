import { Box, Button } from "@mui/material";
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
        height: "100%",
        // alignItems: "start",
        justifyContent: "end",
      }}
    >
      {display !== "menu" && (
        <Button
          onClick={() => setDisplay("menu")}
          sx={{
            position: { xs: "relative", lg: "fixed" },
            transform: { xs: "rotate(20deg)", sm: "rotate(20deg)" },
            fontWeight: "400",
            fontSize: "40px",
            marginTop: { xs: "20%", md: "35%", lg: "25%" },
            marginRight: { lg: "25%" },
            color: "black",
          }}
        >
          X
        </Button>
      )}
      <Box
        id="top-content"
        sx={{
          minWidth: "30%",
          width: { lg: "100%" },
          transform: { xs: "rotate(20deg)", sm: "rotate(20deg)" },
          marginLeft: { xs: "20%", sm: "15%", md: "20%", lg: "15%" },
          marginTop: {
            xs: "10%",
            sm: "40%",
            lg: "20%",
          },
        }}
      >
        {display === "menu" && <Menu setDisplay={setDisplay} />}
        {display === "about" && <About />}
        {display === "contact" && <Contact />}
      </Box>
    </Box>
  );
};
