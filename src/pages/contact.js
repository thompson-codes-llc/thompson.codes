import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
// import MailIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import traci from "../assets/traci.jpeg";
import bryan from "../assets/bryan.jpeg";
import React from "react";

const Contact = ({ setDisplay }) => {
  return (
    <>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => setDisplay("menu")}
          sx={{
            position: { xs: "relative", lg: "fixed" },
            fontWeight: "400",
            fontSize: "40px",
            color: "black",
            alignSelf: "end",
          }}
        >
          X
        </Button>
        <Typography
          variant="h3"
          sx={{
            color: "black",
            alignSelf: "center",
            // marginLeft: "-25%",
            fontSize: { xs: "30px" },
          }}
        >
          Find Us
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              alignItems: "center",
              width: { xs: "100%", md: "25%" },
              gap: { xs: "10px" },
            }}
          >
            <ListItem
              sx={
                {
                  // width: "100%",
                }
              }
            >
              <Box
                component="img"
                sx={{
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: 2,
                }}
                alt="Bryan"
                src={bryan}
              />
            </ListItem>
            <ListItem
              component="a"
              target="_blank"
              href="https://www.linkedin.com/in/snowboardtechie/"
            >
              <ListItemIcon>
                <LinkedInIcon
                  sx={{ color: "darkBlue", width: "auto", height: "50%" }}
                />
              </ListItemIcon>
              <ListItemText sx={{ display: { xs: "none", md: "block" } }}>
                LinkedIn: Bryan Thompson
              </ListItemText>
            </ListItem>
            <ListItem
              component="a"
              target="_blank"
              href="https://bryan.thompson.codes"
            >
              <ListItemIcon>
                <CoPresentIcon
                  sx={{ color: "purple", width: "auto", height: "50%" }}
                />
              </ListItemIcon>
              <ListItemText sx={{ display: { xs: "none", md: "block" } }}>
                Bryan.Thompson.Codes
              </ListItemText>
            </ListItem>
          </List>
          <List
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              alignItems: "center",
              width: { xs: "100%", md: "25%" },
              gap: { xs: "10px" },
            }}
          >
            <ListItem
              sx={{
                width: "50%",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "100px",
                  borderRadius: "50%",
                  boxShadow: 2,
                }}
                alt="Traci"
                src={traci}
              />
            </ListItem>
            <ListItem
              component="a"
              target="_blank"
              href="https://www.linkedin.com/in/tracihthompson/"
            >
              <ListItemIcon>
                <LinkedInIcon
                  sx={{ color: "darkBlue", width: "auto", height: "50%" }}
                />
              </ListItemIcon>
              <ListItemText sx={{ display: { xs: "none", md: "block" } }}>
                LinkedIn: Traci Thompson
              </ListItemText>
            </ListItem>
            <ListItem
              component="a"
              target="_blank"
              href="https://traci.thompson.codes"
            >
              <ListItemIcon>
                <CoPresentIcon
                  sx={{ color: "purple", width: "auto", height: "50%" }}
                />
              </ListItemIcon>
              <ListItemText sx={{ display: { xs: "none", md: "block" } }}>
                Traci.Thompson.Codes
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
      </Box> */}
    </>
  );
};

export default Contact;
