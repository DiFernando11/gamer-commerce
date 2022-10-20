import React from "react";
import Widgets from "../widgets";
import GamesIcon from "@mui/icons-material/Games";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Chart from "../chart";
import Featured from "../featured";
function AdminDashBoard() {
  const contenido1 = {
    title: "Users",
    counter: "12313",
    link: "See all Users",
    icon: <PersonOutlineIcon className="icon" />,
  };

  const contenido2 = {
    title: "Games",
    counter: "1212",
    link: "See all Games",
    icon: <GamesIcon className="icon" />,
  };

  const contenido3 = {
    title: "orders",
    counter: "4444",
    link: "See all orders",
    icon: <ShoppingCartIcon className="icon" />,
  };
  return (
    <main>
      <div className="widgets">
        <Widgets content1={contenido1} />
        <Widgets content1={contenido2} />
        <Widgets content1={contenido3} />
      </div>
      <div className="charts">
        <Featured />
        <Chart dimensions={{ widthLineal: 600, heigth: 60, width: 80 }} />
      </div>
    </main>
  );
}

export default AdminDashBoard;
