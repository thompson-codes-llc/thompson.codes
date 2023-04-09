import { Box, Typography } from "@mui/material";

export const Home = () => (
  <Box
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
      sx={{
        backgroundColor: "white",
        position: "relative",
        display: "flex",
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
        top: { xs: "-15%", sm: "-25%", md: "-25%", lg: "-32%" },
        transform: { xs: "rotate(-20deg)", sm: "rotate(-20deg)" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          transform: { xs: "rotate(20deg)", sm: "rotate(20deg)" },
          marginLeft: {
            xs: "20%",
          },
          marginRight: {
            xs: "auto",
          },
          marginTop: {
            xs: "50%",
            sm: "35%",
            lg: "20%",
          },
          fontSize: {
            xs: "70px",
            sm: "90px",
          },
        }}
      >
        Thompson
      </Typography>
    </Box>

    <Box
      sx={{
        backgroundColor: "black",
        flex: 1,
        display: "flex",
        justifyContent: { xs: "center", sm: "end" },
        minWidth: "750px",
      }}
    >
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
    </Box>
  </Box>
);
