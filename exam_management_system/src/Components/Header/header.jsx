import React from "react";
import classes from "./header.module.css";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloudIcon from "@mui/icons-material/Cloud";
const Header = () => {
  return (
    <div className={classes.app}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <CloudIcon sx={{ fontSize: 40, color: "blue", marginLeft: 3 }} />
          <Typography variant="h6" sx={{ color: "black" }}>
            <p className={classes.headertitle}>EMS </p>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon /> 
            </IconButton>
            Bole bulbula secondary school
          </Typography>
          <div className={classes.user_info}>
            <IconButton edge="end" color="inherit" aria-label="menu">
              U <MoreVertIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
