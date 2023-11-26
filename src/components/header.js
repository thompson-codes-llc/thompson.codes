/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import image from "../assets/beach-background.jpg";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  function scrollToFormAndFocusInput() {
    var form = document.querySelector("#contact-us");
    form.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, null, "#contact-us");

    setTimeout(function () {
      var input = form.querySelector("textarea");
      if (input) input.focus();
    }, 500);
  }

  useEffect(() => {
    if (location.hash === "#contact-us") {
      scrollToFormAndFocusInput();
    }
  }, [location]);

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
          onClick={scrollToFormAndFocusInput}
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
