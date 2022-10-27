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


  const handleFilterOrders= (idCheckbox, e) => {
    var isChecked = document.getElementById(idCheckbox).checked;
    if (!isChecked) {
      setOrders("Restart");
      dispatch(filterOrders("Restart"));
    } else {
      setOrders(e.target.value);
      dispatch(filterOrders(e.target.value))
    }
  };

  const succeededOrders = allOrders.filter((order) => order.state === "succeeded");
  const pendingOrders = allOrders.filter((order) => order.state === "requires_payment_method");

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
        <div className={styles.checkboxes}>
          <div>
            <label>
            Amount ↑
            </label>
              <input className="form-check-input"
                id="Amount ↑"
                type={"checkbox"}
                value="Amount ↑"
                checked={orders === "Amount ↑" ? true : false}
                onChange={(e) =>
                  handleFilterOrders("Amount ↑", e)
                }
              />
          </div>
          <div>
            <label>
              Amount ↓
            </label>
              <input className="form-check-input"
                id="Amount ↓"
                type={"checkbox"}
                value="Amount ↓"
                checked={orders === "Amount ↓" ? true : false}
                onChange={(e) =>
                  handleFilterOrders("Amount ↓", e)
                }
              />
          </div>
          <div>
            <label>
              Succeeded
            </label>
            <input className="form-check-input"
                id="Succeeded"
                type={"checkbox"}
                value="Succeeded"
                checked={orders === "Succeeded" ? true : false}
                onChange={(e) =>
                  handleFilterOrders("Succeeded", e)
                }
              />
          </div>
          <div>
            <label>
              Fail
            </label>
            <input className="form-check-input"
                id="Fail"
                type={"checkbox"}
                value="Fail"
                checked={orders === "Fail" ? true : false}
                onChange={(e) =>
                  handleFilterOrders("Fail", e)
                }
              />
          </div>
          <div>
            <label>
              Today
            </label>
            <input className="form-check-input"
                id="Today"
                type={"checkbox"}
                value="Today"
                checked={orders === "Today" ? true : false}
                onChange={(e) =>
                handleFilterOrders("Today", e)
                }
              />
          </div>
          <div>
            <label>
              Last 7 days
            </label>
            <input className="form-check-input"
                id="Last 7 days"
                type={"checkbox"}
                value="Last 7 days"
                checked={orders === "Last 7 days" ? true : false}
                onChange={(e) =>
                handleFilterOrders("Last 7 days", e)
                }
              />
          </div>
          <div>
            <label>
              Last 30 days
            </label>
            <input className="form-check-input"
                id="Last 30 days"
                type={"checkbox"}
                value="Last 30 days"
                checked={orders === "Last 30 days" ? true : false}
                onChange={(e) =>
                handleFilterOrders("Last 30 days", e)
                }
              />
          </div>    
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
