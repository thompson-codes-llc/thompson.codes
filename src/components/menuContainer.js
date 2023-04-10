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
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "end",
      }}
    >
      {display !== "menu" && (
        <Button
          onClick={() => setDisplay("menu")}
          sx={{
            position: "absolute",
            transform: { xs: "rotate(20deg)", sm: "rotate(20deg)" },
            marginLeft: "75%",
            marginBottom: "200px",
            fontWeight: "400",
            fontSize: "40px",
            color: "black",
          }}
        >
          X
        </Button>
      )}
      <Box
        id="top-content"
        sx={{
          width: "100%",
          transform: { xs: "rotate(20deg)", sm: "rotate(20deg)" },
          marginLeft: "15%",
          marginTop: {
            // xs: "50%",
            // sm: "35%",
            // lg: "40%",
            lg: "30%",
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
