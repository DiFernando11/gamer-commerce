import React from "react";
import "./index.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GamesIcon from "@mui/icons-material/Games";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../../img/loop-mail.png"
const SideBar = () => {

  const onClick = async (e) => {
    e.preventDefault();
    localStorage.clear();
    await Swal.fire({
      timer: 2000,
      title: "Please wait...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    await Swal.fire({
      icon: "success",
      title: `You have logged out`,
      timer: 1500,
    });
    window.location.replace("/");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="logo" />
          </Link>
        </span>
      </div>
      <hr className="hr" />
      <div className="center">
        <ul>
          <p className="titlesidebar">MAIN</p>
          <Link to="/admin" className="link" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="iconsidebar" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="titlesidebar">LIST</p>
          <Link to={"/admin/user"} style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltIcon className="iconsidebar" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/games" style={{ textDecoration: "none" }}>
            <li>
              <GamesIcon className="iconsidebar" />
              <span>Games</span>
            </li>
          </Link>
          <Link to="/admin/orders" style={{ textDecoration: "none" }}>
            <li>
              <ShoppingCartIcon className="iconsidebar" />
              <span>Orders</span>
            </li>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/admin/creategames"}>
            <li>
              <AddIcon className="iconsidebar" />
              <span>Add Game</span>
            </li>
          </Link>
          <p className="titlesidebar">USER</p>
          <Link to="/admin/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountBoxIcon className="iconsidebar" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <LogoutIcon className="iconsidebar" />
            <span onClick={onClick} >Logout</span>
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
