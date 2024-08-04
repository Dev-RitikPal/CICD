import React from "react";
import SideBaarDrawer from "@/components/sidebaar/sidebar";
import Navbaar from "@/components/navbaar/navbaar";
import { Typography } from "@mui/material";

const benefits = () => {
  return (
    <>
      <SideBaarDrawer />
      <Navbaar />
      <Typography sx={{margin:'5%',textAlign:'center',fontSize:'xxx-large'}}>Hi, Welcome to Benefits page</Typography>
    </>
  );
};

export default benefits;
