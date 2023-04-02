import * as React from 'react';
import { MenuItem, MenuList } from "@mui/material";

export const Menu = () => {
  return (
    <MenuList
      open={true}
      sx={{
        background: "purple",
      }}
    >
      <MenuItem>About</MenuItem>
    </MenuList>
  );
}