/* eslint-disable react/prop-types */
import { ListItem, ListItemIcon, Box, Typography, Link } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";

export const Profile = ({ image, name, linkedInUrl }) => {
  return (
    <ListItem sx={{ display: "flex", gap: "5%", marginY: "5%" }}>
      <ListItemIcon>
        <Box
          component="img"
          sx={{
            height: "100px",
            borderRadius: "25%",
            boxShadow: 2,
          }}
          alt={name}
          src={image}
        />
      </ListItemIcon>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ color: "rgb(165,170,154)" }} variant="h4">
          {name} Thompson
        </Typography>
        <Typography sx={{ color: "rgb(165,170,154)" }} variant="h4">
          Co-founder
        </Typography>
        <Box sx={{ marginY: "1%", padding: "0" }}>
          <Link target="_blank" href={linkedInUrl}>
            <ListItemIcon>
              <LinkedInIcon fontSize="large" />
            </ListItemIcon>
          </Link>
          <Link target="_blank" href={`https://${name}.thompson.codes`}>
            <ListItemIcon>
              <CoPresentIcon fontSize="large" />
            </ListItemIcon>
          </Link>
        </Box>
      </Box>
    </ListItem>
  );
};
