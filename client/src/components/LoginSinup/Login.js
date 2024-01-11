import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Login = ({ t, changeToSignup }) => {
  return (
    <React.Fragment>
      <TextField
        className="email-input-field"
        variant="standard"
        label={t("signupForm_enter_email")}
      />
      <TextField
        className="password-input-field"
        variant="standard"
        label={t("signupForm_enter_password")}
      />
      <Typography className="agreement-text">
        {t("login_agreement_1")}{" "}
        <span className="agreement-text-link">{t("login_agreement_2")}</span>{" "}
        {t("login_agreement_3")}{" "}
        <span className="agreement-text-link">{t("login_agreement_4")}</span>.
      </Typography>
      <Box className="bottom-wrapper">
        <Box className="button-container">
          <Button className="primary-button">{t("login_button")}</Button>
          <Typography className="or-text">{t("orText")}</Typography>
          <Button className="secondary-button">
            {t("request_otp_button")}
          </Button>
        </Box>
        <Typography
          className="create-account-text-link"
          onClick={changeToSignup}
        >
          {t("newToFlipkartText")}
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Login;
