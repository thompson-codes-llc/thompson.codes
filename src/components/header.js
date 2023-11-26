/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Card, Typography } from "@mui/material";
import image from "../assets/beach_background.jpg";
import React, { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    var canvas = document.createElement("canvas");
    canvas.width = 24;
    canvas.height = 24;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    // Draw envelope body
    ctx.rect(2, 6, 20, 12);
    // Draw upper part of envelope
    ctx.moveTo(2, 7);
    ctx.lineTo(12, 14);
    ctx.lineTo(22, 7);
    // Fill the envelope
    ctx.fillStyle = "blue";
    ctx.fill();
    var dataURL = canvas.toDataURL("image/png");
    document.getElementById("emailButton").style.cursor =
      "url(" + dataURL + "), auto";
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      sx={{
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        minHeight: "150%",
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
          Your online business, made simple
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
          id="emailButton"
          href="mailto:contact@thompson.codes?subject=Interested%20in%20consultation&body=Hello%20Thompsons%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20consultation%20for%20my%20business.%20Please%20contact%20me%20using%20the%20information%20listed%20below%20to%20schedule%20a%20time%20to%20meet%20and%20dicuss%20your%20IT%20services.%0D%0A%0D%0AThank%20you%2C%0D%0A%0D%0A"
          sx={{
            borderRadius: "20px",
            backgroundColor: "var(--Orange-2, #BB6E36)",
            minWidth: "40%",
            maxWidth: "40%",
            padding: "2%",
            marginTop: "3%",
            "&:hover": {
              "*": {
                color: "var(--Orange-2, #BB6E36)",
              },
              backgroundColor: "transparent",
            },
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
