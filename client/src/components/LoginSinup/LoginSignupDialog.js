import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Login from "./Login";
import Signup from "./Signup";
import { LOGIN_PAGE_IMG } from "../../utils/constant";
import { useTranslation } from "react-i18next";

import "./LoginSignupDialog.scss";

const LoginSignupDialog = ({ isDialogOpen, handleLoginClose }) => {
  const [account, setAccount] = useState("login");
  const { t } = useTranslation();

  const changeToLogin = () => {
    setAccount("login");
  };

  const changeToSignup = () => {
    setAccount("signup");
  };

  return (
    <Dialog
      className="login-signup-dialog"
      open={isDialogOpen}
      onClose={handleLoginClose}
      PaperProps={{ sx: { maxWidth: "650px", borderRadius: "0.5rem" } }}
    >
      <Box className="wrapper">
        <Box className="left-section">
          <Typography className="text" variant="h5">
            {t(`${account}_heading`)}
          </Typography>
          <Typography className="text-tag">
            {t(`${account}_subHeading`)}
          </Typography>
          <img className="img" src={LOGIN_PAGE_IMG} alt="img" />
        </Box>
        <Box className="right-section">
          {account == "login" ? (
            <Login t={t} changeToSignup={changeToSignup} />
          ) : (
            <Signup t={t} changeToLogin={changeToLogin} />
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginSignupDialog;
