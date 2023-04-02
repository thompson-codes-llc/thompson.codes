import * as React from 'react';
import { Link, MenuItem, MenuList } from "@mui/material";

export const Menu = () => {
  return (
    <MenuList
      open={true}
      sx={{
      }}
    >
      <MenuItem sx={{borderRadius: "48%"}}component={Link} href="/about">About</MenuItem>
      <MenuItem sx={{borderRadius: "40%"}}component={Link} href="/contact">Contact</MenuItem>
    </MenuList>
  );
}