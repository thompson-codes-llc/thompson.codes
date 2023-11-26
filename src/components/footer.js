import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import image from "../assets/woman-dock.png";

export const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:contact@thompson.codes?subject=Interested%20in%20consultation&body=${encodeURIComponent(
      message
    )}`;
    window.open(mailtoLink, "_blank");
  };

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
    ctx.fillStyle = "orange";
    ctx.fill();
    var dataURL = canvas.toDataURL("image/png");
    document.getElementById("emailButton").style.cursor =
      "url(" + dataURL + "), auto";
  }, []);

  return (
    <Box
      sx={{
        height: "100%",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Box
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
            id="emailButton"
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

export default Footer;
