/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/components/header.css";

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
    <Box className="header">
      <Box className="header-content">
        <Typography className="header-title">
          Your online business, made simple
        </Typography>
        <Typography className="header-subtitle">
          Free up your time so that you can focus on what matters most.
        </Typography>
        {/* TODO: Set CTA hover state */}
        <Button onClick={scrollToFormAndFocusInput} className="header-cta">
          <Typography className="header-cta-text">
            Schedule a consultation
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
