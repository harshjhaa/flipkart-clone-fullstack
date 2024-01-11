import { useState } from "react";
import { useTranslation } from "react-i18next";

// const initialSignupData = {
//   userName: "",
//   email: "",
//   mobile: "",
//   password: "",
// };

const useFormInput = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState(initialData);

  const { t } = useTranslation();

  const isValidMobile = (mobile) => {
    const mobileRegex = /^\d*$/; // Only allow digits (0-9)
    return mobileRegex.test(mobile);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if ("userName" in formData && !formData.userName.trim()) {
      newErrors.userName = t("name_required_message");
    }
    if ("email" in formData && !formData.email.trim()) {
      newErrors.email = t("email_required_message");
    } else if ("email" in formData && !isValidEmail(formData.email)) {
      newErrors.email = t("invalid_email_message");
    }
    if ("mobile" in formData && !formData.mobile.trim()) {
      newErrors.mobile = t("mobile_required_message");
    } else if ("mobile" in formData && !isValidMobile(formData.mobile)) {
      newErrors.mobile = t("invalid_mobile_message");
    }
    if ("password" in formData && !formData.password.trim()) {
      newErrors.password = t("password_required_message");
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return {
    formData,
    errors,
    validateForm,
    handleFormInput,
  };
};

export default useFormInput;
