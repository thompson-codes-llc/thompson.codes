/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Card, Typography } from "@mui/material";
import React from "react";

export const Header = ({ colors }) => {
  const cardStyles = {
    borderRadius: "0px",
    textAlign: "center",
    width: "100%",
  };

  const bottomCardStyles = {
    ...cardStyles,
    backgroundColor: colors.dark,
    height: "100%",
    paddingBottom: "15%",
    paddingTop: "2%",
  };

  const headerStyles = {
    fontSize: {
      xs: "3rem",
      sm: "4rem",
      md: "6rem",
    },
    opacity: 0.9,
  };

  const topCardStyles = {
    ...cardStyles,
    backgroundColor: colors.light,
    paddingBottom: "2%",
    paddingTop: "15%",
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
