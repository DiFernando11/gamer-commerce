/* import "./index.scss" */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filterOrders, getAllOrders } from "../../../redux/actions";
import styles from "./index.module.css";
import {CircularProgressbar} from "react-circular-progressbar";

const AdminOrders = () => {
  const allOrders = useSelector((state) => state.allOrders);
  const [orders, setOrders] = React.useState("");
  let dispatch = useDispatch();
  const allOrdersfiltered = useSelector((state) => state.allOrdersFilters);
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const organize = (e)=>{
    e.preventDefault()
    setOrders(e.target.value)
    dispatch(filterOrders(e.target.value))
    if (e.target.value === "Restart") {
      dispatch(getAllOrders());
    }
  }

  const succeededOrders = allOrders.filter((order) => order.state === "succeeded");
  const pendingOrders = allOrders.filter((order) => order.state === "requires_payment_method");
  console.log(allOrders)

  return (
    <main className={styles.bodys}>
      <section className={styles.containergraficos}>
        <div className={styles.grafico}>
          <div>
          <CircularProgressbar  value={(succeededOrders.length/allOrders.length)*100} text={`${Math.round((succeededOrders.length/allOrders.length)*100)}%`}/>
          </div>
          <div>
          <CircularProgressbar  value={(pendingOrders.length/allOrders.length)*100} text={`${Math.round((pendingOrders.length/allOrders.length)*100)}%`}/>
          </div>
        </div>
        <div>
        <select className="select-menu" onChange={organize}>
                        <option disabled selected className="select-menu-inner">Sort By</option>
                        <option >Amount ↑</option>
                        <option>Amount ↓</option>
                        <option>Date ↑</option>
                        <option>Succeeded</option>
                        <option>Fail</option>
                        <option>Restart</option>
        </select>
        </div>
      </section>
      <section className={styles.container}>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>#</th>
            <th>User</th>
            <th>Games</th>
            <th>Date</th>
            <th>status</th>
            <th>Amount</th>
          </tr>

          {allOrdersfiltered.length
            ? allOrdersfiltered.map((orders, index) => (
                <tr key={index} className={styles.tableColumns}>
                  <td className={styles.columnIdGame}>{orders.id}</td>
                  <td className={styles.columnNameGame}>
                    <Link to={`/admin/user/${orders.user.id}`}>
                      <img
                        src={orders.user.profilePicture}
                        alt={orders.user.id}
                      />
                      <span>{orders.user.email}</span>
                    </Link>
                  </td>
                  <td className={styles.columnNameGame}>
                    {orders.games?.map((game, index) => (
                      <div
                        key={index}
                        className={styles.containerImageNameGame}
                      >
                        <img src={game.image} alt={game.name} />
                        <span>{game.name}</span>
                      </div>
                    ))}
                  </td>
                  <td className={styles.columnRatingGame}>{orders.creado}</td>
                  <td
                    className={
                      orders.state === "succeeded"
                        ? styles.columnStatusGame
                        : styles.columnStatusGame1
                    }
                  >
                    {orders.state !== null ? orders.state : "-"}
                  </td>
                  <td className={styles.columnRatingGame}>${orders.amount}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      </section>
    </main>
  );
};

export default AdminOrders;
