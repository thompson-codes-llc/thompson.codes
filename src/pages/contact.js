import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Layout } from '../components/layout';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Layout left={
      <>
        <Typography
          variant="h3"
          sx={{
            color: "black",
            marginTop: "50%",
            marginLeft: "20%",
          }}
        >
          Find Us
        </Typography>
        <List>
          <ListItem component="a" target="_blank" href="mailto:contact@thompson.codes">
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText>contact@thompson.codes</ListItemText>
          </ListItem>
          <ListItem component="a" target="_blank" href="https://www.linkedin.com/in/snowboardtechie/">
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText>LinkedIn: Bryan Thompson</ListItemText>
          </ListItem>
          <ListItem component="a" target="_blank" href="https://www.linkedin.com/in/tracihthompson/">
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText>LinkedIn: Traci Thompson</ListItemText>
          </ListItem>
        </List>
      </>
    } right={
      <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            marginTop: "30%",
          }}
        >
          Have a Question? 
        </Typography>
      </Box>
    }/>
  );
}

export default Contact;
