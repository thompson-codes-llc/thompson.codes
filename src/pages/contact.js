import React from 'react';
import { Typography } from '@mui/material';
import { Layout } from '../components/layout';

const Contact = () => {
  return (
    <Layout left={
        <Typography
          variant="h3"
          sx={{
            color: "black",
            marginTop: "50%",
            marginLeft: "5%",
            marginRight: "5%"
          }}
        >
          How to reach us:
        </Typography>
    } right={
        <Typography
          variant="h3"
          sx={{
            color: "white",
            marginTop: "70%",
            marginLeft: "0%"
          }}
        >
          We can be reached via email at contact@thompson.codes 
        </Typography>}
      />

  );
}

export default Contact;
