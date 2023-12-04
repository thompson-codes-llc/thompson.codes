import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "../../styles/components/home/contact.css";

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
    <Box className="contact">
      <Box id="contact-us">
        <Typography className="contact-title">Contact Us</Typography>
        <FormControl onSubmit={handleSubmit} className="contact-form">
          <Typography className="contact-form-title">
            What would you like to discuss?
          </Typography>
          <TextField
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="contact-form-input"
          />
          <Button
            id="email-button"
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            Email us
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Contact;
