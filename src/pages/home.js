// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "@mui/material";
import {
  About,
  Header,
  Footer,
  Services,
  // Testimonials,
} from "../components/index";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FCFCFC",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        // width: "200vh",
        // width: "auto",
        minWidth: "fit-content",
      }}
    >
      <Header />
      <Services />
      <About />
      {/* <Testimonials /> */}
      <Footer />
    </Box>
  );
};
export default Home;
