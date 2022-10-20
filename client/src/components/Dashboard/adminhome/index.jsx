import React from "react";
import "./index.scss";
import SideBar from "../side-bar";
import NavBarAdmin from "../nav-bar-admin";
import Widgets from "../widgets";
import GamesIcon from '@mui/icons-material/Games';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Chart from "../chart";
import Featured from "../featured";

const adminHome = () => {
const contenido1={
  title:"Users",
  counter:"12313",
  link:"See all Users",
  icon: <PersonOutlineIcon className="icon"/>
}

const contenido2={
  title:"Games",
  counter:"1212",
  link:"See all Games",
  icon: <GamesIcon className="icon"/>
}

const contenido3={
  title:"orders",
  counter:"4444",
  link:"See all orders",
  icon: <ShoppingCartIcon className="icon"/>
}

  return (
    <div className="homeAdmin">
      <SideBar />
      <div className="homeContainerAdmin">
        <NavBarAdmin/>
        <div className="widgets">
          <Widgets content1={contenido1}/>
          <Widgets content1={contenido2}/>
          <Widgets content1={contenido3}/>
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default adminHome;
