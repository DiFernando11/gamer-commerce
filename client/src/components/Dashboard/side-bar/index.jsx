import React from "react";
import "./index.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GamesIcon from "@mui/icons-material/Games";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">logo</span>
      </div>
      <hr className="hr" />
      <div className="center">
        <ul>
          <p className="titlesidebar">MAIN</p>
          <Link to="/admin" className="link">
            <li>
              <DashboardIcon className="iconsidebar" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="titlesidebar">LIST</p>
          <Link to={"/admin/user"}>
            <li>
              <PeopleAltIcon className="iconsidebar" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/admin/games">
            <li>
              <GamesIcon className="iconsidebar" />
              <span>Games</span>
            </li>
          </Link>
          <li>
            <ShoppingCartIcon className="iconsidebar" />
            <span>Orders</span>
          </li>
          <p className="titlesidebar">USER</p>
          <Link to="/admin/profile">
            <li>
              <AccountBoxIcon className="iconsidebar" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <LogoutIcon className="iconsidebar" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom1">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
};

export default SideBar;
