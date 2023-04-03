import { Box, Card } from "@mui/material";
import PropTypes from "prop-types";

export const Layout = ({ left, right }) => {
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
          alignItems: "baseline",
        }}
      >
        {left}
      </Box>
      <Box
        sx={{
          bgcolor: "black",
          flex: 1,
          height: "1000px",
        }}
      >
        {right}
      </Box>
    </Card>
  );
};

Layout.propTypes = {
  left: PropTypes.elementType,
  right: PropTypes.elementType,
};
