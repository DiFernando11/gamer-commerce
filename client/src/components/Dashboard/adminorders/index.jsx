/* import "./index.scss" */
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const AdminOrders = () => {
    const allOrders = useSelector((state) => state.allOrders);
    console.log(allOrders);
  
    return (
      <main className={styles.bodys}>
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
  
            {allOrders.length
              ? allOrders.map((orders, index) => (
                  <tr key={index} className={styles.tableColumns}>
                    <td className={styles.columnIdGame}>{orders.id}</td>
                    <td className={styles.columnNameGame}>
                    <Link to={`/admin/user/${orders.user.id}`}>
                      <img src={orders.user.profilePicture} alt={orders.user.id} />
                      <span>{orders.user.email}</span>
                    </Link>
                    </td>
                    <td className={styles.columnNameGame}>
                        {orders.games?.map((game , index) => (
                        <div key={index} className={styles.containerImageNameGame}>
                            <img src={game.image} alt={game.name} />
                            <span>{game.name}</span>
                        </div>
                    ))}
                    </td>
                    <td className={styles.columnRatingGame}>{orders.creado}</td>
                    <td className={orders.state==="succeeded"? styles.columnStatusGame : styles.columnStatusGame1}>{orders.state !== null ? orders.state : "-"}</td>
                    <td className={styles.columnRatingGame}>${orders.amount}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </main>
    );
  };

export default AdminOrders;





