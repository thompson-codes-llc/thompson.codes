import React from 'react';
import { Layout } from '../components/layout';
import { Box, Card, Typography } from '@mui/material';

const About = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        bgcolor: "black",
        height: "100%",
      }}
    >  
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "0 20% 60% 0%",
          flex: 1.5,
          height: "125%",
          margin: "-17% 0 0% 0%",
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline"
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "black",
            marginTop: "50%",
            marginLeft: "5%",
            marginRight: "5%"
          }}
        >
          Thompson Codes is co-founded and run by programmer couple Traci and Bryan Thompson 
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: "black",
          flex: 1,
          height: "1000px",

        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            marginTop: "70%",
            marginLeft: "0%"
          }}
        >
          more words and things 
        </Typography>
      </Box>

    </Card>
  );
}

export default About;
