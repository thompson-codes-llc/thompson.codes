// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box } from "@mui/material";
import "../styles/pages/home.css";
import {
  About,
  Header,
  Contact,
  Services,
  // Testimonials,
} from "../components/home_index";

const Home = () => {
  return (
    <Box className="home">
      <Header />
      <Services />
      <About />
      {/* <Testimonials /> */}
      <Contact />
    </Box>
  );
};
export default Home;
