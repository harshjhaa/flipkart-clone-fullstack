import React from "react";
import "./App.scss";
import Routes from "./routes/appRoutes";
import Box from "@mui/material/Box";
import i18n from "../i18n"; // Import the i18n configuration
import { I18nextProvider } from "react-i18next";

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Box className="main-container">
        <Routes />
      </Box>
    </I18nextProvider>
  );
};

export default App;
