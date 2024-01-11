import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <React.Fragment>
      <h1>404 Page Not Found</h1>
      <h2>The page that you're looking for does not exist</h2>
      <br />
      <Link to="/">
        <button style={{ "margin-top": "20px" }}> Go to home</button>
      </Link>
    </React.Fragment>
  );
};

export default NotFound;
