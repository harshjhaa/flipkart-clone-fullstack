import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useFormInput from "../../customHooks/useFormInput";
import CustomInput from "../../commonComponents/CustomInput";

const initialLoginData = {
  email: "",
  password: "",
};

const Login = ({ t, changeToSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { formData, errors, validateForm, handleFormInput } =
    useFormInput(initialLoginData);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = () => {
    console.log("validateForm ", validateForm());
    if (validateForm()) {
      console.log("formData ", formData);
      // Add your login logic here
    }
  };

  return (
    <React.Fragment>
      <Box className="input-container" onChange={handleFormInput}>
        <CustomInput
          className="email-input-field"
          label={t("signupForm_enter_email")}
          name={"email"}
          type={"text"}
          required={true}
          error={!!errors.email}
          helperText={errors.email}
        />
        <CustomInput
          className={"password-input-field"}
          label={t("signupForm_enter_password")}
          name={"password"}
          type={showPassword ? "text" : "password"}
          required={true}
          error={!!errors.password}
          helperText={errors.password}
          handleTogglePasswordVisibility={handleTogglePasswordVisibility}
          showPassword={showPassword}
          visibilityIcon={true}
        />
      </Box>
      <Typography className="agreement-text">
        {t("login_agreement_1")}{" "}
        <span className="agreement-text-link">{t("login_agreement_2")}</span>{" "}
        {t("login_agreement_3")}{" "}
        <span className="agreement-text-link">{t("login_agreement_4")}</span>.
      </Typography>
      <Box className="bottom-wrapper">
        <Box className="button-container">
          <Button className="primary-button" onClick={handleLogin}>
            {t("login_button")}
          </Button>
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
