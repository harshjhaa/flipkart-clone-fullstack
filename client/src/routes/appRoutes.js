import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import NotFound from "./NotFound";

const appRoutes = () => {
  return (
    <Router>
      <Header />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/not-found-404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found-404" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default appRoutes;
