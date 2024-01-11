import React from "react";
import "./Home.scss";
import SubNavbar from "../SubNavbar/SubNavbar";
import Banner from "./Banner/Banner";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const Home = () => {
  const BannerBox = styled(Box)`
    margin-top: 1.5vh;
    padding: 0.5rem;
    padding-top: 0;
  `;

  return (
    <React.Fragment>
      <SubNavbar />
      <BannerBox>
        <Banner />
      </BannerBox>
    </React.Fragment>
  );
};

export default Home;
