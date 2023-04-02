import React from 'react';
import { Box, Typography } from '@mui/material';
import { Layout } from '../components/layout';

const About = () => {
  return (
    <Layout 
      left={
        <Box
        sx={{
          color: "black",
          marginTop: "60%",
          marginLeft: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "end"
        }}
        >
          <Typography variant="h2">Thompson Codes is</Typography>
          <Typography variant="h4">Bryan Thompson, Co-founder</Typography>
          <Typography variant="h4">Traci Thompson, Co-founder</Typography>
        </Box>
      } 
      right={
        <Typography
          variant="h4"
          sx={{
            color: "white",
            marginTop: "80%",
            marginLeft: "0%"
          }}
        >
          We aim to provide quality web development services to small businesses in Central Oregon
        </Typography>
      } />
  );
}

export default About;
