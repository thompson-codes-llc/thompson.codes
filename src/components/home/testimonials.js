// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Card, MobileStepper, Stack, Typography } from "@mui/material";
import "../../styles/components/home/testimonials.css";

const Testimonials = () => {
  return (
    <Box className="testimonials">
      <Card className="testimonials-card">
        <Stack className="testimonials-card-content">
          <Typography className="testimonial">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </Typography>
          {/* TODO: Increase dot size */}
          <MobileStepper
            steps={3}
            activeStep={0}
            position="static"
            backButton={undefined}
            nextButton={undefined}
          />
        </Stack>
      </Card>
    </Box>
  );
};

export default Testimonials;
