/* eslint-disable react/prop-types */
import { ListItem, ListItemIcon, Box, Typography, Link } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";

export const Profile = ({ image, name, linkedInUrl }) => {
  const boxStyles = {
    display: "flex",
    flexDirection: "column",
  };

  const detailStyles = {
    marginY: "1%",
    padding: 0,
  };

  const iconStyles = {
    height: "100px",
    borderRadius: "25%",
    boxShadow: 2,
  };

  const listStyles = {
    display: "flex",
    gap: "5%",
    marginY: "5%",
    justifyContent: "center",
  };

  const textStyles = {
    color: "rgb(165,170,154)",
    fontSize: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2.5rem",
    },
  };

  return (
    <ListItem sx={{ ...listStyles }}>
      <ListItemIcon>
        <Box component="img" sx={{ ...iconStyles }} alt={name} src={image} />
      </ListItemIcon>
      <Box sx={{ ...boxStyles }}>
        <Typography sx={{ ...textStyles, color: "rgb(165,170,154)" }}>
          {name} Thompson
        </Typography>
        <Typography sx={{ ...textStyles, color: "rgb(165,170,154)" }}>
          Co-founder
        </Typography>
        <Box sx={{ ...detailStyles }}>
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
