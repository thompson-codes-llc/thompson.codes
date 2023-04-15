import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/MailOutline";

export const ContactBottom = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: { xs: "20%" },
        marginLeft: { xs: "10%", lg: "50%" },
        marginTop: { lg: "-10%" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "white",
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
            <MailIcon
              sx={{
                color: "white",
              }}
            />
          </ListItemIcon>
          <ListItemText sx={{ fontSize: "20px", color: "white" }}>
            contact@thompson.codes
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};
