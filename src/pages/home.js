import { Layout } from "../components/layout";
import { Typography } from "@mui/material";
import { Menu } from "../components/menu";

const leftHeader = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          color: "black",
          marginTop: "60%",
          marginLeft: "40%",
        }}
      >
        Thompson
      </Typography>
      <Menu />
    </>
  );
};

const rightHeader = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        color: "white",
        marginTop: "65%",
      }}
    >
      Codes
    </Typography>
  );
};
const Home = () => {
  return <Layout left={leftHeader()} right={rightHeader()} />;
};

export default Home;
