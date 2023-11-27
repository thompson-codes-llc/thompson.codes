// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Card, Typography, Stack } from "@mui/material";
import backgroundImage from "../assets/men-with-dog.jpg";

const About = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #FCFCFC 0.1%, rgb(237,243,247, 0.75) 10.77%, rgb(187,212,226, 0.75) 40%, rgb(187,212,226, 0.75) 60%, rgb(237,243,247, 0.75) 90.94%, #FCFCFC 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundPosition: "center left",
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(to top, white, transparent, white), url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
      }}
    >
      <Card
        sx={{
          width: "425px",
          borderRadius: "16px",
          boxShadow: "6px 6px 20px 0px rgba(41, 80, 115, 0.46)",
          backgroundColor: "#FCFCFC",
          marginRight: "10%",
        }}
      >
        <Stack
          direction="column"
          spacing={7}
          alignItems="center"
          sx={{
            height: "100%",
            marginY: "15%",
            marginX: "5%",
          }}
        >
          <Typography
            sx={{
              color: "var(--Dark-Blue, #295073)",
              fontFamily: "Josefin Sans",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              letterSpacing: "-1.6px",
            }}
          >
            About Us
          </Typography>
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
            }}
          >
            Thompson Codes is a small business located out of Central Oregon
            that specializes in a wide variety of web and IT services. Operated
            by co-owners Bryan and Traci Thompson, combined we have over 20
            years of experience in the industry. From a wide range of companies
            and industries, startups to fortune 5, working with schools and
            government.
            <br />
            <br />
            We are excited to offer our services to you and your business.
            Anything from a simple website to a full blown web application, with
            mobile offerings. We can help you with your IT needs!
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
};

export default About;
