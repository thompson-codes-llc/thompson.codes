import { Box } from "@mui/material";
import React from "react";
import { MenuContainer } from "./menuContainer";

export const Home = () => {
  return (
    <Box
      id="layout-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "black",
        position: "relative",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        maxWidth: "100%",
      }}
    >
      <Box
        id="top-container"
        sx={{
          backgroundColor: "white",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "center",
          },
          flex: { xs: 1.5, sm: 2, md: 3 },
          minHeight: { lg: "700px" },
          minWidth: "750px",
          width: {
            xs: "775px",
            sm: "1250px",
            md: "1400px",
            lg: "2000px",
          },
          marginLeft: {
            xs: "-130px",
            sm: "-155px",
            md: "-175px",
            lg: "-195px",
          },
          top: { xs: "-15%", sm: "-25%", md: "-25%", lg: "-50%" },
          transform: { xs: "rotate(-20deg)", sm: "rotate(-20deg)" },
        }}
      >
        <MenuContainer />
      </Box>

      <Box
        id="bottom-container"
        sx={{
          backgroundColor: "black",
          flex: 1,
          display: "flex",
          justifyContent: { xs: "center", sm: "end" },
          minWidth: "750px",
          width: "100%",
        }}
      >
        {/* {display === "home" && (
          <Typography
            variant="h1"
            sx={{
              color: "white",
              marginTop: { xs: 0, sm: "-5%", md: "-15%" },
              marginRight: { xs: "15%", sm: "20%", md: "10%" },
              fontSize: {
                xs: "70px",
                sm: "90px",
              },
            }}
          >
            Codes
          </Typography>
        )}
        {display === "about" && (
          <Typography
            variant="h4"
            sx={{
              color: "white",
              width: "40%",
              textAlign: "end",
              marginRight: { lg: "10%" },
            }}
          >
            We aim to provide quality web development services to businesses in
            Central Oregon
          </Typography>
        )} */}
      </Box>
    </Box>
  );
};
