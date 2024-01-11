import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { subNavData } from "../../utils/data";
import { getObjectKeysArr } from "../../utils/common";
import "./SubNavbar.scss";

const SubNavbar = () => {
  return subNavData?.length > 0 ? (
    <Box className="subNavbar-container">
      {subNavData.map((item, index) => {
        return getObjectKeysArr(item)?.length > 0 ? (
          <Box className="item-container" key={item.url + index}>
            <img className="item-img" src={item.url || null} alt="img" />
            <Typography className="item-text">{item.text || null}</Typography>
          </Box>
        ) : null;
      })}
    </Box>
  ) : null;
};

export default SubNavbar;
