import { Box, Card } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Contact } from "../components/contact";
import { Header } from "../components/header";
import { About } from "../components/about";
import { People } from "../components/people";

const Home = () => {
  const cardStyles = {
    borderRadius: "0px",
    height: "100%",
    width: "100%",
  };

  const colors = {
    dark: "rgb(31, 43, 3, .8)",
    light: "rgb(165,170,154, .8)",
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      sx={{
        minWidth: "300px",
      }}
    >
      <Header colors={colors} />
      <Card
        sx={{
          ...cardStyles,
          backgroundColor: colors.light,
          py: "10%",
        }}
      >
        <About color={colors.dark} />
      </Card>
      <Card
        sx={{
          ...cardStyles,
          backgroundColor: colors.dark,
          py: "5%",
        }}
      >
        <People />
      </Card>
      <Card
        sx={{
          ...cardStyles,
          alignItems: "center",
          backgroundColor: colors.light,
          display: "flex",
          flexDirection: "column",
          paddingY: "10%",
          textAlign: "center",
        }}
      >
        <Contact color={colors.dark} />
      </Card>
    </Box>
  );
};

export default Home;
