import { Box, Card, Typography, Stack } from "@mui/material";
import image from "../assets/men-with-dog.png";

export const About = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #FCFCFC 0.1%, rgb(237,243,247, 0.75) 10.77%, rgb(187,212,226, 0.75) 40%, rgb(187,212,226, 0.75) 60%, rgb(237,243,247, 0.75) 90.94%, #FCFCFC 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        // width: "100%",
        // backgroundSize: "cover",
        // backgroundImage: `url(${image})`,
        // backgroundRepeat: "no-repeat",
        backgroundPosition: "center left",
        // minHeight: "100%",
        backgroundSize: "cover",
        // backgroundSize: "auto 100%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
        // minWidth: "100%",
      }}
    >
      <Card
        sx={{
          width: "375px",
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
            More Stuff
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
};
