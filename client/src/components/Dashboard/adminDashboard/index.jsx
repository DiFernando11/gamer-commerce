import React, { useEffect } from "react";
import Widgets from "../widgets";
import GamesIcon from "@mui/icons-material/Games";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Chart from "../chart";
import Featured from "../featured";
import { getallUser, getAllGames,getAllOrders } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function AdminDashBoard() {

  const allUsers = useSelector((state) => state.allUsers);
  const allGames = useSelector((state) => state.allGames);
  const allorders = useSelector((state) => state.allOrders);
  let dispatch = useDispatch();
  useEffect(() => {
       dispatch(getallUser());
       dispatch(getAllGames());
       dispatch(getAllOrders());
  }, [dispatch]);


  const contenido1 = {
    title: "Users",
    counter: allUsers.length,
    Linkeado: "/admin/user",
    link: "See all Users",
    icon: <PersonOutlineIcon className="icon" />,
  };

  const contenido2 = {
    title: "Games",
    counter: allGames.length,
    Linkeado: "/admin/games",
    link: "See all Games",
    icon: <GamesIcon className="icon" />,
  };

  const contenido3 = {
    title: "orders",
    counter: allorders.length,
    Linkeado: "/admin/orders",
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
