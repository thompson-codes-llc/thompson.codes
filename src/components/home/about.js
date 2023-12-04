// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Card, Typography, Stack } from "@mui/material";
import "../../styles/components/home/about.css";

const About = () => {
  return (
    <Box className="about">
      <Card className="about-card">
        <Stack className="about-card-content">
          <Typography className="about-card-title">About Us</Typography>
          <Typography className="about-card-body">
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
