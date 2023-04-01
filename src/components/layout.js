import * as React from 'react';
import { Box, Container } from '@mui/material';

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
            border="1.5px solid white" 
            width="2000px" 
            height="2000px" 
            position="absolute"  
            bottom="10%" 
            right="20%"
            onMouseOver={() => handleHover()}
        />
    </>
    )
}