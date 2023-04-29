import { Box, Card, List, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import traci from "../assets/traci.jpeg";
import bryan from "../assets/bryan.jpeg";
import { Profile } from "../components/profile";

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
          paddingRight: "10%",
          paddingTop: "20%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: color1,
            fontSize: "72px",
            opacity: 0.9,
          }}
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
            fontSize: "72px",
            marginLeft: "20%",
            opacity: 0.9,
          }}
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
        <Typography sx={{ textAlign: "center" }} variant="h5">
          We aim to provide quality web development services to small businesses
          in Central Oregon
        </Typography>
      </Card>
      <Card
        sx={{
          backgroundColor: color1,
          height: "100%",
          py: "10%",
          width: "100%",
        }}
      >
        <List
          sx={{
            marginLeft: "10%",
          }}
        >
          <Profile image={traci} name="Traci" />
          <Profile image={bryan} name="Bryan" />
        </List>
      </Card>
    </Box>
  );
};

export default Home;
