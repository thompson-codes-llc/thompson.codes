import { Box } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Header } from "../components/header";
import { Services } from "../components/services";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FCFCFC",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <Header />
      <Services />
      <About />
      <Testimonials />
    </Box>
  );
};
export default Home;
