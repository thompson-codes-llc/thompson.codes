import { Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Typography variant="h2">Thompson Codes is</Typography>
      <Typography variant="h4">Bryan Thompson, Co-founder</Typography>
      <Typography variant="h4">Traci Thompson, Co-founder</Typography>
      <Typography
        variant="h4"
        sx={{
          color: "white",
          marginTop: "80%",
          marginLeft: "0%",
        }}
      >
        We aim to provide quality web development services to small businesses
        in Central Oregon
      </Typography>
    </>
  );
};

export default About;
