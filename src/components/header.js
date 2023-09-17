/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Card, Typography } from "@mui/material";
import image from "../assets/beach_background.jpg";
import React from "react";

export const Header = () => {
  return (
    <Box display={"flex"} flexDirection={"row"} sx={{}}>
      <Box
        display="flex"
        flexDirection={"column"}
        position="absolute"
        sx={{
          gap: "20px",
          paddingLeft: "5%",
          top: "525px",
          zIndex: 1,
        }}
      >
        <Typography
          fontFamily={"Josefin Sans"}
          fontSize="300px"
          sx={{
            color: "#295073",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-2.4px",
          }}
        >
          Your business, made simple
        </Typography>
        <Typography
          fontFamily={"Lato"}
          fontSize="125px"
          sx={{
            color: "#1763A6",
          }}
        >
          Free up your time so that you can focus on what matters most.
        </Typography>
        {/* TODO: Set CTA hover state */}
        <Button
          sx={{
            borderRadius: "30px",
            backgroundColor: "var(--Orange-2, #BB6E36)",
            marginTop: "75px",
            width: "25%",
            height: "150px",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              color: "#FFF",
              fontFamily: "Lato",
              fontSize: "45px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              letterSpacing: "3px",
            }}
          >
            Schedule a consultation
          </Typography>
        </Button>
      </Box>
      <Box
        component="img"
        position="absolute"
        sx={{
          right: 0,
          width: "80%",
        }}
        alt="working-remotely"
        src={image}
      />
    </Box>
  );
};
