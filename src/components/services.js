/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Card, Stack } from "@mui/material";
import React from "react";
import { ServiceCard } from "./service_card";
import bug from "../assets/bug.png";
import idea from "../assets/idea.png";
import sync from "../assets/sync.png";

const Services = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #FCFCFC 0.0%, rgba(252, 251, 251, 0.25) 0.1%, rgba(202, 142, 99, 0.45) 20.84%, RGBA(187, 110, 54, .6) 50%, rgba(197, 132, 84, 0.45) 80.94%, rgba(202, 142, 99, 0.25) 88.54%, #FCFCFC 100%)",
        minHeight: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-50px",
      }}
    >
      <Stack direction="row" spacing={10}>
        <ServiceCard
          header="Web Development"
          content="Let’s build your vision from the ground up"
          icon={idea}
        />
        <ServiceCard
          header="System Administration"
          content="We’ll keep your business up and running smoothly"
          icon={sync}
        />
        <ServiceCard
          header="Security"
          content="Squashing bugs before they become a problem"
          icon={bug}
        />
      </Stack>
    </Box>
  );
};

export default Services;
