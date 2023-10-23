/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Card, Typography } from "@mui/material";
import image from "../assets/beach_background.jpg";
import React from "react";

export const Header = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      sx={{
        backgroundSize: "cover",
        minHeight: "225%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        display="flex"
        flexDirection={"column"}
        position="absolute"
        sx={{
          gap: "30px",
          paddingLeft: "5%",
          top: "25%",
          zIndex: 1,
        }}
      >
        <Typography
          fontFamily={"Josefin Sans"}
          fontSize="80px"
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
          fontSize="32px"
          sx={{
            color: "#1763A6",
          }}
        >
          Free up your time so that you can focus on what matters most.
        </Typography>
        {/* TODO: Set CTA hover state */}
        <Button
          sx={{
            borderRadius: "20px",
            backgroundColor: "var(--Orange-2, #BB6E36)",
            minWidth: "40%",
            maxWidth: "40%",
            padding: "2%",
            marginTop: "3%",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              color: "#FFF",
              fontFamily: "Lato",
              fontSize: "18px",
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
    </Box>
  );
};
