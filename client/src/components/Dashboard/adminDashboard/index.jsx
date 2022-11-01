import React, { useEffect } from "react";
import Widgets from "../widgets";
import GamesIcon from "@mui/icons-material/Games";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Chartdashboard from "../chardashboard";
import Featured from "../featured";
import { getallUser, getAllGames,getAllOrders, getchartinfo } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
function AdminDashBoard() {

  const allUsers = useSelector((state) => state.allUsers);
  const allGames = useSelector((state) => state.allGames);
  const allorders = useSelector((state) => state.allOrders);
  const info = useSelector((state) => state.chartInfo);
  let dispatch = useDispatch();
  useEffect(() => {
       dispatch(getallUser());
       dispatch(getAllGames());
       dispatch(getAllOrders());
       dispatch(getchartinfo());
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
    <main className={styles.mainCountainerDashboard}>
      <div className="widgets">
        <Widgets content1={contenido1} />
        <Widgets content1={contenido2} />
        <Widgets content1={contenido3} />
      </div>
      <div className="charts">
        <Featured />
        <Chartdashboard dimensions={{ widthLineal: 100, heigth: 80, width: 100 }} info={info} />
      </div>
    </main>
  );
}

export default AdminDashBoard;
