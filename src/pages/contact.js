import { Box, Button, Typography } from "@mui/material";
import React from "react";
import traci from "../assets/traci.jpeg";
import bryan from "../assets/bryan.jpeg";
import { ContactCard } from "../components/contactCard";

const Contact = ({ setDisplay }) => {
  return (
    <>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: { lg: "25%" },
          marginLeft: { lg: "-22%" },
        }}
      >
        <Button
          onClick={() => setDisplay("menu")}
          sx={{
            position: { xs: "relative", lg: "relative" },
            fontWeight: "400",
            fontSize: "40px",
            color: "black",
            alignSelf: "end",
            right: { lg: "-80%" },
            marginTop: { lg: "-5%" },
          }}
        >
          X
        </Button>
        <Box
          sx={{
            marginTop: { lg: "-5%" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "black",
              alignSelf: "center",
              fontSize: { xs: "30px" },
              marginLeft: { lg: "25%" },
            }}
          >
            Find Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { lg: "150px" },
              marginRight: { lg: "20%" },
            }}
          >
            <ContactCard
              name="Bryan"
              src={bryan}
              linkedIn="https://www.linkedin.com/in/snowboardtechie/"
              website="https://bryan.thompson.codes"
            />
            <ContactCard
              name="Traci"
              src={traci}
              linkedIn="https://www.linkedin.com/in/tracihthompson/"
              website="https://tracithompson.codes"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
