import React from "react";
import "./index.scss";
import SideBar from "../side-bar";
import NavBarAdmin from "../nav-bar-admin";
import AdminDashBoard from "../adminDashboard";
import { Route } from "react-router-dom";
import GameDashBoard from "../gameDashboard";
import Adminuser from "../adminuser";
import AdminDetailGame from "../adminDetailGame";
import AdminProfile from "../adminProfile";

const adminHome = () => {
  return (
    <div className="homeAdmin">
      <SideBar />
      <div className="homeContainerAdmin">
        <NavBarAdmin />
        <Route exact path={"/admin"} component={AdminDashBoard} />
        <Route exact path={"/admin/games"} component={GameDashBoard} />
        <Route exact path={"/admin/user"} component={Adminuser} />
        <Route
          exact
          path={"/admin/games/detail/:id"}
          component={AdminDetailGame}
        />
        <Route exact path={"/admin/profile"} component={AdminProfile} />
      </div>
    </div>
  );
};

export default adminHome;
