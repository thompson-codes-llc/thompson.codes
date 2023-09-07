/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Card, Typography } from "@mui/material";
import image from "../assets/istock-header.png";
import React from "react";

export const Header = () => {
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Box display="flex" flexDirection={"column"}>
        <Typography fontFamily={"Josefin Sans"} fontSize="80px">
          Your business, made simple
        </Typography>
        <Typography fontFamily={"Lato"} fontSize="40px">
          Free up your time so that you can focus on what matters most.
        </Typography>
        <Button
          sx={{
            borderRadius: "20px",
            backgroundColor: "var(--Orange-2, #BB6E36)",
            width: "426px",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              color: "#FFF",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "1.28px",
            }}
          >
            Schedule a consultation
          </Typography>
        </Button>
      </Box>
      <Box
        component="img"
        sx={{
          ml: "auto",
          mr: "-275px", // trim image instead
        }}
        alt="working-remotely"
        src={image}
      />
    </Box>
  );
};
