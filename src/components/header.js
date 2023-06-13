/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, Typography } from "@mui/material";
import React from "react";

export const Header = ({ colors }) => {
  const topCardStyles = {
    backgroundColor: colors.light,
    borderRadius: "0px",
    paddingBottom: "2%",
    paddingTop: "15%",
    textAlign: "center",
    width: "100%",
  };

  const bottomCardStyles = {
    backgroundColor: colors.dark,
    borderRadius: "0px",
    height: "100%",
    paddingBottom: "15%",
    paddingTop: "2%",
    textAlign: "center",
    width: "100%",
  };

  const headerStyles = {
    fontSize: {
      xs: "3rem",
      sm: "4rem",
      md: "6rem",
    },
    opacity: 0.9,
  };

  return (
    <>
      <Card sx={{ ...topCardStyles }}>
        <Typography
          sx={{ ...headerStyles, color: colors.dark, paddingRight: "10%" }}
        >
          Thompson
        </Typography>
      </Card>
      <Card sx={{ ...bottomCardStyles }}>
        <Typography
          sx={{ ...headerStyles, color: colors.light, marginLeft: "20%" }}
        >
          Codes
        </Typography>
      </Card>
    </>
  );
};
