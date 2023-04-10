import { Link, MenuItem, MenuList } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const Menu = ({ setDisplay }) => {
  return (
    <MenuList open={true} sx={{}}>
      <MenuItem
        sx={{ borderRadius: "48%" }}
        component={Link}
        onClick={setDisplay("about")}
      >
        About
      </MenuItem>
      <MenuItem sx={{ borderRadius: "48%" }} component={Link} href="/contact">
        Contact
      </MenuItem>
    </MenuList>
  );
};
