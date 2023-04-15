import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";

import React from "react";

export const ContactCard = ({ name, src, linkedIn, website }) => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        alignItems: "center",
        width: { xs: "100%", md: "25%" },
        gap: { xs: "10px" },
      }}
    >
      <ListItem>
        <Box
          component="img"
          sx={{
            height: "100px",
            borderRadius: "50%",
            boxShadow: 2,
          }}
          alt={name}
          src={src}
        />
      </ListItem>
      <ListItem component="a" target="_blank" href={linkedIn}>
        <ListItemIcon>
          <LinkedInIcon
            sx={{ color: "darkBlue", width: "auto", height: "50%" }}
          />
        </ListItemIcon>
        <ListItemText sx={{ display: { xs: "none", md: "block" } }}>
          LinkedIn: {name} Thompson
        </ListItemText>
      </ListItem>
      <ListItem component="a" target="_blank" href={website}>
        <ListItemIcon>
          <CoPresentIcon
            sx={{ color: "purple", width: "auto", height: "50%" }}
          />
        </ListItemIcon>
        <ListItemText sx={{ display: { xs: "none", md: "block" } }}>
          {name}.Thompson.Codes
        </ListItemText>
      </ListItem>
    </List>
  );
};
