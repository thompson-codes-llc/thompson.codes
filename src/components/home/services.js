/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Card, Stack } from "@mui/material";
import React from "react";
import { ServiceCard } from "./services/service_card";
import "../../styles/components/home/services.css";
import bug from "../../assets/bug.png";
import idea from "../../assets/idea.png";
import sync from "../../assets/sync.png";

const Services = () => {
  return (
    <Box className="services">
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
