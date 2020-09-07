import React from "react";
import "./Header.css";

import FacebookLogo from "./Images/hiclipart.com.png";

import { Avatar, IconButton } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={FacebookLogo} alt="" />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_options header_options--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_options">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_options">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_options">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_options">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <Avatar />
          <h4>Tiffany Barclay</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
