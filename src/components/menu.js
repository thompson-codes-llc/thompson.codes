import { MenuItem, MenuList, Typography } from "@mui/material";
import React from "react";

export const Menu = ({ setDisplay }) => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          marginTop: {
            xs: "20%",
          },
          marginRight: {
            xs: "auto",
          },
          fontSize: {
            xs: "60px",
            sm: "90px",
          },
        }}
      >
        Thompson
      </Typography>

      <MenuList open={true}>
        <MenuItem
          sx={{ borderRadius: "48%" }}
          onClick={() => setDisplay("about")}
        >
          About
        </MenuItem>
        <MenuItem
          sx={{ borderRadius: "48%" }}
          onClick={() => setDisplay("contact")}
        >
          Contact
        </MenuItem>
      </MenuList>
    </>
  );
};
