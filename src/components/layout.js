import * as React from 'react';
import { Box, Button, Card } from '@mui/material';

export const Layout = () => {
    return (
    <>
      <Card 
        sx={{
          height: "100%",
        }}
      >
        <Box sx={{
          bgcolor: "black",
          height: "100%",
          width: "100%",
          position: "absolute",
        }} />
        <Button 
          variant="text" 
          sx={{
            color: "white",
            fontSize: "80px", 
            position: "fixed", 
            bottom: "40%", 
            right: "10%",
          }}>
          Codes
        </Button>
      </Card>

      <Card sx={{height: "35%"}}>       
        <Box 
          sx={{
            bgcolor: 'white',
            opacity: .8,
            borderRadius: "50%",
            border: "4px solid white",
            width: "2000px", 
            height: "2000px", 
            position: "fixed",  
            bottom: "15%",
            right: "15%",
          }}
        />
        <Button variant="text" sx={{
          color: "black", 
          fontSize: "80px", 
          position: "absolute", 
          bottom: "50%", 
          right: "35%",
          marginTop: "20px"
        }}>
          Thompson
        </Button>
        <Button variant="text" sx={{
          color: "black", 
          fontSize: "80px", 
          position: "absolute", 
          bottom: "5%", 
          right: "45%",
        }}>
          Lives
        </Button>
      </Card> 
    </>
    )
}