import { Card, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

export const Header = (color1, color2) => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: color2,
          height: "100%",
          paddingBottom: "2%",
          paddingTop: "20%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: color1,
            opacity: 0.9,
            paddingRight: "10%",
          }}
          variant={"h1"}
        >
          Thompson
        </Typography>
      </Card>
      <Card
        sx={{
          backgroundColor: color1,
          height: "100%",
          paddingBottom: "20%",
          paddingTop: "2%",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: color2,
            marginLeft: "20%",
            opacity: 0.9,
          }}
          variant="h1"
        >
          Codes
        </Typography>
      </Card>
    </>
  );
};
