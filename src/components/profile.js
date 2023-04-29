/* eslint-disable react/prop-types */
import { ListItem, ListItemIcon, Box, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

export const Profile = ({ image, name }) => {
  return (
    <ListItem sx={{ display: "flex", gap: "5%", marginY: "5%" }}>
      <ListItemIcon>
        <Box
          component="img"
          sx={{
            height: "100px",
            borderRadius: "20%",
            boxShadow: 2,
          }}
          alt={name}
          src={image}
        />
      </ListItemIcon>
      <Typography variant="h4">{name} Thompson, Co-founder</Typography>
    </ListItem>
  );
};
