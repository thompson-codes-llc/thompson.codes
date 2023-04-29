import { Box, Card } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Contact } from "../components/contact";
import { Header } from "../components/header";
import { About } from "../components/about";
import { People } from "../components/people";

const color1 = "rgb(31, 43, 3, .8)";
const color2 = "rgb(165,170,154, .8)";

const Home = () => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Header color1={color1} color2={color2} />
      <Card
        sx={{
          backgroundColor: color2,
          height: "100%",
          py: "10%",
          width: "100%",
        }}
      >
        <About color={color1} />
      </Card>
      <Card
        sx={{
          backgroundColor: color1,
          py: "5%",
          width: "100%",
        }}
      >
        <People />
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
        <Contact color={color1} />
      </Card>
    </Box>
  );
};

export default Home;
