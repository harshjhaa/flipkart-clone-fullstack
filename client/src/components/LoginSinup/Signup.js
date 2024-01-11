import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Signup = ({ t, changeToLogin }) => {
  return (
    <React.Fragment>
      <TextField
        className="name-input-field"
        variant="standard"
        label={t("signupForm_enter_name")}
      />
      <TextField
        className="email-input-field"
        variant="standard"
        label={t("signupForm_enter_email")}
      />
      <TextField
        className="mobile-input-field"
        variant="standard"
        label={t("signupForm_enter_mobile")}
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
          <Button className="primary-button">{t("signupBtn")}</Button>
          <Button className="secondary-button" onClick={changeToLogin}>
            {t("existingUserBtn")}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Signup;
