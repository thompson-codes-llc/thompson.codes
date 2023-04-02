// import * as React from 'react';
// import { Box, Button, Card } from '@mui/material';
// import { Menu } from './menu';

// export const Layout = () => {
//     return (
//     <>
//       <Card 
//         sx={{
//           height: "100%",
//         }}
//       >
//         <Box sx={{
//           bgcolor: "black",
//           height: "100%",
//           width: "100%",
//           position: "absolute",
//         }} />
//         <Button 
//           variant="text" 
//           sx={{
//             color: "white",
//             fontSize: "80px", 
//             position: "fixed", 
//             bottom: "40%", 
//             right: "10%",
//           }}>
//           Codes
//         </Button>
//       </Card>

//       <Card sx={{height: "35%"}}>       
//         <Box 
//           sx={{
//             bgcolor: 'white',
//             borderRadius: "50%",
//             border: "4px solid white",
//             width: "2000px", 
//             height: "2000px", 
//             position: "fixed",  
//             bottom: "15%",
//             right: "15%",
//           }}
//         />
//         <Menu sx={{
//           border: "10px solid pink"
//         }}/>
//         <Button variant="text" sx={{
//           color: "black", 
//           fontSize: "80px", 
//           position: "absolute", 
//           bottom: "50%", 
//           right: "35%",
//           marginTop: "20px"
//         }}>
//           Thompson
//         </Button>
//       </Card> 
//     </>
//     )
// }

import * as React from 'react';
import { Box, Button, Card } from '@mui/material';
import { Menu } from './menu';

export const Layout = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        bgcolor: "black",
        height: "100%"
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "0 55% 90% 20%",
          flex: 2,
          height: "150%",
          margin: "-30% 0 5% -10%"
        }}
      >
      </Box>
      <Box
        sx={{
          bgcolor: "black",
          flex: 1,
          height: "1000px",
        }}
      >
      </Box>
    </Card>
  );
}