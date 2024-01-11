import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useFormInput from "../../customHooks/useFormInput";
import CustomInput from "../../commonComponents/CustomInput";

const initialSignupData = {
  userName: "",
  email: "",
  mobile: "",
  password: "",
};

const Signup = ({ t, changeToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { formData, errors, validateForm, handleFormInput } =
    useFormInput(initialSignupData);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSignup = () => {
    if (validateForm()) {
      console.log("formData ", formData);
      // Add your signup logic here
    }
  };

  return (
    <React.Fragment>
      <Box className="input-container" onChange={handleFormInput}>
        <CustomInput
          className={"name-input-field"}
          label={t("signupForm_enter_name")}
          name={"userName"}
          type={"text"}
          required={true}
          error={!!errors.userName}
          helperText={errors.userName}
        />
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
          className={"mobile-input-field"}
          label={t("signupForm_enter_mobile")}
          name={"mobile"}
          type={"tel"} // Set type to "tel" for numeric keyboard on mobile devices
          required={true}
          error={!!errors.mobile}
          helperText={errors.mobile}
          inputProps={{ maxLength: 10 }} // Set the maximum length to 10
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
          <Button className="primary-button" onClick={handleSignup}>
            {t("signupBtn")}
          </Button>
          <Button className="secondary-button" onClick={changeToLogin}>
            {t("existingUserBtn")}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Signup;
