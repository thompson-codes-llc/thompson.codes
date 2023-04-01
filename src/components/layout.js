import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';

export const Layout = () => {
    const [backgroundColor, setBackgroundColor] = React.useState("black");
    const handleHover = () => {
        const newColor = backgroundColor === "black" ? "white" : "black";
        setBackgroundColor(newColor);
    }

    return (
    <>
        <Box backgroundColor="black" height="100%" margin="0" fixed />
        <Box 
            backgroundColor="black"
            borderRadius="50%" 
            border="4px solid white" 
            width="2000px" 
            height="2000px" 
            position="absolute"  
            bottom="10%" 
            right="15%"
            onMouseOver={() => handleHover()}
        />
        <Box 
            backgroundColor="white"
            borderRadius="50%" 
            border="1.5px solid white"
            component="span" 
            width="1500px" 
            height="1500px" 
            position="absolute"  
            bottom="20%" 
            right="40%"
            onMouseOver={() => handleHover()}
        >
        </Box>
        <Box 
            backgroundColor="black"
            borderRadius="50%" 
            border="1.5px solid white" 
            width="1500px" 
            height="1500px" 
            position="absolute"  
            bottom="40%" 
            right="50%"
            onMouseOver={() => handleHover()}
        />
    </>
    )
}