import {
  Box,
  Card,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import traci from "../assets/traci.jpeg";
import bryan from "../assets/bryan.jpeg";
import { Profile } from "../components/profile";
import MailIcon from "@mui/icons-material/MailOutline";

const color1 = "rgb(31, 43, 3, .8)";
const color2 = "rgb(165,170,154, .8)";

const Home = () => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Card
        sx={{
          backgroundColor: color2,
          height: "100%",
          paddingBottom: "2%",
          paddingTop: "20%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: color1,
            opacity: 0.9,
            paddingRight: "10%",
          }}
          variant="h1"
        >
          Thompson
        </Typography>
      </Card>

      <Card
        sx={{
          backgroundColor: color1,
          height: "100%",
          paddingBottom: "20%",
          paddingTop: "2%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: color2,
            marginLeft: "20%",
            opacity: 0.9,
          }}
          variant="h1"
        >
          Codes
        </Typography>
      </Card>
      <Card
        sx={{
          backgroundColor: color2,
          height: "100%",
          py: "10%",
          width: "100%",
        }}
      >
        <Typography sx={{ textAlign: "center", color: color1 }} variant="h4">
          We aim to provide quality web development services to small businesses
          in Central Oregon
        </Typography>
      </Card>
      <Card
        sx={{
          backgroundColor: color1,
          py: "5%",
          width: "100%",
        }}
      >
        <Container
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Profile
            image={bryan}
            name="Bryan"
            linkedInUrl={"https://www.linkedin.com/in/snowboardtechie/"}
          />
          <Profile
            image={traci}
            name="Traci"
            linkedInUrl={"https://www.linkedin.com/in/tracihthompson/"}
          />
        </Container>
      </Card>
      <Card
        sx={{
          backgroundColor: color2,
          height: "100%",
          paddingY: "10%",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: color1,
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
                color: color1,
              }}
            >
              contact@thompson.codes
            </ListItemText>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default Home;
