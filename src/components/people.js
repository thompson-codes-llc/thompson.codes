import { Container } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";
import traci from "../assets/traci.jpeg";
import bryan from "../assets/bryan.jpeg";
import { Profile } from "../components/profile";

export const People = () => {
  const styles = {
    alignItems: "center",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
  };
  return (
    <Container sx={{ ...styles }}>
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
  );
};
