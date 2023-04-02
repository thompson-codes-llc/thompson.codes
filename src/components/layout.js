import * as React from 'react';
import { Box, Card, Typography } from '@mui/material';

export const Layout = () => {
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
          margin: "-17% 0 0% 0%"
        }}
      >
        <Typography 
          variant='h1' 
          sx={{
            color: "black",
            marginTop: "60%",
            marginLeft: "40%"
          }}
        >
          Thompson
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
          variant='h1' 
          sx={{
            color: "white",
            marginTop: "65%",
          }}
        >
          Codes
        </Typography>
      </Box>
    </Card>
  );
}