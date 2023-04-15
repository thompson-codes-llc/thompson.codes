import { Box } from "@mui/material";
import React from "react";
import { MenuBottom } from "./menuBottom";
import { AboutBottom } from "./aboutBottom";
import { ContactBottom } from "./contactBottom";

export const BottomContainer = ({ display }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "end", lg: "center" },
        width: "100%",
      }}
    >
      {display === "menu" && <MenuBottom />}
      {display === "about" && <AboutBottom />}
      {display === "contact" && <ContactBottom />}
    </Box>
  );
};
