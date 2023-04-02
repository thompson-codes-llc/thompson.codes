import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Layout } from '../components/layout';
import MailIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import traci from '../assets/traci.jpeg';
import bryan from '../assets/bryan.jpeg';

const Contact = () => {
  return (
    <Layout left={
      <Box
        sx={{
          marginTop: "45%",
          marginLeft: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "black",
          }}
        >
          Find Us
        </Typography>
        <Box sx={{display: "flex", flexDirection: "row"}}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <ListItem 
            sx={{
              width: "50%"
          }}>
            <Box
              component="img"
              sx={{
                height: "100px",
                borderRadius: "50%",
                boxShadow: 2
              }}
              alt="Bryan"
              src={bryan}
            />
          </ListItem>
          <ListItem component="a" target="_blank" href="https://www.linkedin.com/in/snowboardtechie/">
            <ListItemIcon>
              <LinkedInIcon sx={{color: "darkBlue"}}/>
            </ListItemIcon>
            <ListItemText>LinkedIn: Bryan Thompson</ListItemText>
          </ListItem>
          <ListItem component="a" target="_blank" href="https://bryan.thompson.codes">
            <ListItemIcon>
              <CoPresentIcon sx={{color: "purple"}} />
            </ListItemIcon>
            <ListItemText>Bryan.Thompson.Codes</ListItemText>
          </ListItem>
        </List>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <ListItem 
            sx={{
              width: "50%"
          }}>
            <Box
              component="img"
              sx={{
                height: "100px",
                borderRadius: "50%",
                boxShadow: 2
              }}
              alt="Traci"
              src={traci}
            />
          </ListItem>
          <ListItem component="a" target="_blank" href="https://www.linkedin.com/in/tracihthompson/">
            <ListItemIcon>
            <LinkedInIcon sx={{color: "darkBlue"}}/>
            </ListItemIcon>
            <ListItemText>LinkedIn: Traci Thompson</ListItemText>
          </ListItem>
          <ListItem component="a" target="_blank" href="https://traci.thompson.codes">
            <ListItemIcon>
              <CoPresentIcon sx={{color: "purple"}} />
            </ListItemIcon>
            <ListItemText>Traci.Thompson.Codes</ListItemText>
          </ListItem>
        </List>
        </Box>
      </Box>
    } right={
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            marginTop: "32%",
          }}
        >
          Contact Us
        </Typography>
        <List>
          <ListItem component="a" target="_blank" href="mailto:contact@thompson.codes">
            <ListItemIcon>
              <MailIcon sx={{
                color: "white"
              }}
              />
            </ListItemIcon>
            <ListItemText sx={{fontSize: "20px", color: "white"}}>contact@thompson.codes</ListItemText>
          </ListItem>
        </List>
      </Box>
    }/>
  );
}

export default Contact;
