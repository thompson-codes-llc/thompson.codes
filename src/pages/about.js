import { Box, Button, Typography } from "@mui/material";
import React from "react";

const About = ({ setDisplay }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: { lg: "-10%" },
          marginTop: { lg: "15%" },
        }}
      >
        <Button
          onClick={() => setDisplay("menu")}
          sx={{
            fontWeight: "400",
            fontSize: "40px",
            color: "black",
            alignSelf: "center",
            marginBottom: { xs: "10%", lg: 0 },
            marginLeft: { lg: "60%" },
          }}
        >
          X
        </Button>
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "35px",
              sm: "90px",
            },
          }}
        >
          Thompson Codes is
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "25px",
              lg: "40px",
            },
            marginLeft: { xs: "-10px", lg: "1%" },
          }}
        >
          Bryan Thompson, Co-founder
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "25px",
              lg: "40px",
            },
            marginLeft: { xs: "-10px", lg: "1%" },
          }}
        >
          Traci Thompson, Co-founder
        </Typography>
      </Box>
    </>
  );
};

export default About;
