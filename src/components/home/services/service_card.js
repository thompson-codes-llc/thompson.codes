/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, Stack, Typography } from "@mui/material";
import React from "react";

export const ServiceCard = ({ header, content, icon }) => {
  return (
    <Card className="service-card">
      <Stack className="service-card-content">
        <Typography className="service-card-header">{header}</Typography>
        <Typography className="service-card-message">{content}</Typography>
        <img src={icon} className="service-image" />
      </Stack>
    </Card>
  );
};
