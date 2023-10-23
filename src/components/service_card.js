/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, Stack, Typography } from "@mui/material";
import React from "react";

export const ServiceCard = ({ header, content, icon }) => {
  return (
    <Card
      sx={{
        height: "400px",
        width: "375px",
        borderRadius: "16px",
        boxShadow: "6px 6px 20px 0px rgba(41, 80, 115, 0.46)",
        backgroundColor: "#FCFCFC",
      }}
    >
      <Stack
        direction="column"
        spacing={8}
        alignItems="center"
        sx={{
          height: "100%",
          marginY: "15%",
          marginX: "5%",
        }}
      >
        <Typography
          sx={{
            color: "var(--Dark-Blue, #295073)",
            fontFamily: "Josefin Sans",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "-1.6px",
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            color: "var(--Medium-Blue, #1763A6)",
            textAlign: "center",
            fontFamily: "Josefin Sans",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "-1.44px",
          }}
        >
          {content}
        </Typography>
        <img src={icon} height="75px" />
      </Stack>
    </Card>
  );
};
