import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CustomInput = ({
  variant = "standard",
  label = "",
  name = "",
  type,
  required = false,
  error = false,
  helperText = "",
  showPassword,
  handleTogglePasswordVisibility,
  visibilityIcon = false,
  ...props
}) => {
  return (
    <TextField
      sx={{ width: "100%" }}
      variant={variant}
      label={label}
      name={name}
      type={type}
      required={required}
      error={!!error}
      helperText={helperText}
      InputProps={
        visibilityIcon === true
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
      {...props}
    />
  );
};

export default CustomInput;
