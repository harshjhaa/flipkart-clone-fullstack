import React from "react";
import AppBar from "@mui/material/AppBar"; //we should always do named import like this
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";
import { LOGO_URL, PLUS_LOGO_URL } from "../../utils/constant";
import "./Header.scss";

const CustomAppBar = styled(AppBar)`
  background-color: #2874f0;
  height: 55px;
`;

const Header = () => {
  return (
    <CustomAppBar className="header-container">
      <Toolbar className="toolbar">
        <Box className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
          <Typography className="logo-sub-heading">
            Explore <span className="span">Plus</span>
            <img className="sub-logo" src={PLUS_LOGO_URL} alt="logo" />
          </Typography>
        </Box>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
