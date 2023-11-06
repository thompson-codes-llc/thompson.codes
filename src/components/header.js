/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Card, Typography } from "@mui/material";
import image from "../assets/beach_background.jpg";
import React from "react";

const Header = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      sx={{
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        minHeight: "150%",
      }}
    >
      <Box
        display="flex"
        flexDirection={"column"}
        sx={{
          gap: "30px",
          paddingLeft: "5%",
          position: "relative",
          top: "10%",
          width: { xs: "50%", sm: "100%" },
          zIndex: 1,
        }}
      >
        <Typography
          fontFamily={"Josefin Sans"}
          sx={{
            color: "#295073",
            fontSize: { xs: "90px", sm: "70px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-2.4px",
            whiteSpace: { xs: "break-spaces", sm: "nowrap" },
          }}
        >
          Your online business, made simple
        </Typography>
        <Typography
          fontFamily={"Lato"}
          sx={{
            color: "#1763A6",
            fontSize: { xs: "32px", sm: "28px" },
            display: { xs: "none", sm: "block" },
            whiteSpace: "nowrap",
          }}
        >
          Free up your time so that you can focus on what matters most.
        </Typography>
        {/* TODO: Set CTA hover state */}
        <Button
          href="mailto:contact@thompson.codes?subject=Interested%20in%20consultation&body=Hello%20Thompsons%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20consultation%20for%20my%20business.%20Please%20contact%20me%20using%20the%20information%20listed%20below%20to%20schedule%20a%20time%20to%20meet%20and%20dicuss%20your%20IT%20services.%0D%0A%0D%0AThank%20you%2C%0D%0A%0D%0A"
          sx={{
            borderRadius: "20px",
            backgroundColor: "var(--Orange-2, #BB6E36)",
            minWidth: "40%",
            marginTop: { xs: "3%", sm: "1%", md: "1%" },
            "&:hover": {
              "*": {
                color: "var(--Orange-2, #BB6E36)",
              },
              backgroundColor: "transparent",
            },
            maxWidth: { xs: "90%", sm: "55%", lg: "40%" },
            padding: "2%",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              color: "#FFF",
              fontFamily: "Lato",
              fontSize: { xs: "28px", lg: "24px" },
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

export default Header;
