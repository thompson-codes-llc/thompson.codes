import * as React from 'react';
import { Link, MenuItem, MenuList } from "@mui/material";

export const Menu = () => {
  return (
    <MenuList
      open={true}
      sx={{
      }}
    >
      <MenuItem component={Link} href="/about">About</MenuItem>
      <MenuItem component={Link} href="/contact">Contact</MenuItem>
    </MenuList>
  );
}