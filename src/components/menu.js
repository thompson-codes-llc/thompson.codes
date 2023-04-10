import { Link, MenuItem, MenuList, Typography } from "@mui/material";
import React from "react";

export const Menu = ({ setDisplay }) => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          marginRight: {
            xs: "auto",
          },
          fontSize: {
            xs: "70px",
            sm: "90px",
          },
        }}
      >
        Thompson
      </Typography>

      <MenuList open={true}>
        <MenuItem
          sx={{ borderRadius: "48%" }}
          component={Link}
          onClick={() => setDisplay("about")}
        >
          About
        </MenuItem>
        <MenuItem sx={{ borderRadius: "48%" }} component={Link} href="/contact">
          Contact
        </MenuItem>
      </MenuList>
    </>
  );
};
