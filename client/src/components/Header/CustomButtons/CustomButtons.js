import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./CustomButtons.scss";
// import { useNavigate } from "react-router-dom";
import LoginSignupDialog from "../../LoginSinup/LoginSignupDialog";

const CustomButtons = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const navigate = useNavigate();

  const handleLoginOpen = () => {
    setIsDialogOpen(true);
  };

  const handleLoginClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box className="header-custom-buttons-container">
      <Button className="login-button" onClick={handleLoginOpen}>
        Login
      </Button>
      <Typography>Become a Seller</Typography>
      <Typography className="flex item-center">
        More
        <KeyboardArrowDownIcon />
      </Typography>
      <Typography className="flex item-center">
        <ShoppingCartIcon />
        Cart
      </Typography>
      {isDialogOpen ? (
        <LoginSignupDialog
          isDialogOpen={isDialogOpen}
          handleLoginClose={handleLoginClose}
        />
      ) : null}
    </Box>
  );
};

export default CustomButtons;
