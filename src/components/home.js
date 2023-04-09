// import { Layout } from "./layout";
// import { Typography } from "@mui/material";
// import { Menu } from "./menu";

// const leftHeader = () => {
//   return (
//     <>
//       <Typography
//         variant="h1"
//         sx={{
//           color: "black",
//           marginTop: "60%",
//           marginLeft: "40%",
//         }}
//       >
//         Thompson
//       </Typography>
//       <Menu />
//     </>
//   );
// };

// const rightHeader = () => {
//   return (
//     <Typography
//       variant="h1"
//       sx={{
//         color: "white",
//         marginTop: "65%",
//       }}
//     >
//       Codes
//     </Typography>
//   );
// };
// export const Home = () => {
//   return <Layout left={leftHeader()} right={rightHeader()} />;
// };

import { Box } from "@mui/material";

export const Home = () => {
  return (
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
          flex: { xs: 2, sm: 2, md: 3 },
          position: "relative",
          width: {
            xs: "750px",
            sm: "1250px",
            md: "1400px",
            lg: "1500px",
          },
          textAlign: "center",
          color: "white",
          transform: { xs: "rotate(-20deg)", sm: "rotate(-20deg)" },
          marginLeft: {
            xs: "-110px",
            sm: "-125px",
            md: "-150px",
          },
          top: { xs: "-15%", sm: "-25%", lg: "-28%" },
          minWidth: "750px",
        }}
      />
      <Box sx={{ backgroundColor: "black", flex: 1 }} />
    </Box>
  );
};
