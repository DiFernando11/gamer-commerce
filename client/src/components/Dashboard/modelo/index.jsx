import React from "react";
import GameDashBoard from "../gameDashboard";
import NavBarAdmin from "../nav-bar-admin";
import SideBar from "../side-bar";


const Modelo = () => {


  return (
    <div className="homeAdmin">
      <SideBar />
      <div className="homeContainerAdmin">
        <NavBarAdmin/>
        <div className="widgets">
          <GameDashBoard/>
        </div>
      </div>
    </div>
  );
};

export default Modelo;