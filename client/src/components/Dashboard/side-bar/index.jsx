import React from "react";
import "./index.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GamesIcon from '@mui/icons-material/Games';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">logo</span>
            </div>
            <hr className="hr"/>
            <div className="center">
                <ul>
                    <p className="titlesidebar">MAIN</p>
                    <li>
                        <DashboardIcon className="iconsidebar"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="titlesidebar">LIST</p>
                    <li>
                        <PeopleAltIcon className="iconsidebar"/>
                        <span>Users</span>
                    </li>
                    <li>
                        <GamesIcon className="iconsidebar"/>
                        <span>Games</span>
                    </li>
                    <li>
                        <ShoppingCartIcon className="iconsidebar"/>
                        <span>Orders</span>
                    </li>
                    <p className="titlesidebar">USER</p>
                    <li>
                        <AccountBoxIcon className="iconsidebar"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="iconsidebar"/>
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