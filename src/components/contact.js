import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import MailIcon from "@mui/icons-material/MailOutline";

export const Contact = (color) => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: color,
        }}
      >
        Contact Us
      </Typography>
      <List>
        <ListItem
          component="a"
          target="_blank"
          href="mailto:contact@thompson.codes"
        >
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: color,
            }}
          >
            contact@thompson.codes
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};
