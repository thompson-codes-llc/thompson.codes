import { Box, Card, MobileStepper, Stack, Typography } from "@mui/material";

export const Testimonials = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #FCFCFC 0.0%, rgba(252, 251, 251, 0.25) 0.1%, rgba(202, 142, 99, 0.45) 20.84%, RGBA(187, 110, 54, .6) 50%, rgba(197, 132, 84, 0.45) 80.94%, rgba(202, 142, 99, 0.25) 88.54%, #FCFCFC 100%)",
        minHeight: "700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-10px",
      }}
    >
      <Card
        sx={{
          height: "400px",
          width: "65%",
          borderRadius: "16px",
          boxShadow: "6px 6px 20px 0px rgba(41, 80, 115, 0.46)",
          backgroundColor: "#FCFCFC",
        }}
      >
        <Stack
          sx={{
            alignItems: "center",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{
              color: "#1763A6",
              textAlign: "center",
              fontFamily: "Josefin Sans",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              letterSpacing: "-2.4px",
              padding: "50px",
            }}
          >
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </Typography>
          {/* TODO: Increase dot size */}
          <MobileStepper steps={3} activeStep={1} position="static" sx={{}} />
        </Stack>
      </Card>
    </Box>
  );
};
