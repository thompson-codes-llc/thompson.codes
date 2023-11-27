import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import image from "../assets/woman-dock.jpg";

export const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:contact@thompson.codes?subject=Interested%20in%20consultation&body=${encodeURIComponent(
      message
    )}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <Box
      sx={{
        height: "100%",
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to top, white, transparent, white), url(${image})`,
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Box
        id="contact-us"
        sx={{
          height: "475px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "450px",
          borderRadius: "16px",
          boxShadow: "6px 6px 20px 0px rgba(41, 80, 115, 0.46)",
          backgroundColor: "#FCFCFC",
          marginRight: "70%",
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
            textAlign: "center",
          }}
        >
          Contact Us
        </Typography>
        <FormControl
          onSubmit={handleSubmit}
          sx={{
            paddingTop: "25px",
            minWidth: "80%",
          }}
        >
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
              paddingBottom: "15px",
            }}
          >
            What would you like to discuss?
          </Typography>
          <TextField
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              paddingBottom: "25px",
            }}
          />
          <Button
            id="email-button"
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              width: "40%",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            Email us
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Contact;
