import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile, cleanState } from "../../../redux/actions";
import Chart from "../chart";
import styles from "./index.module.css";

const Adminuser = () => {
  const user = useSelector((state) => state.activityUser);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile(id, true));
    return () => cleanState("cleanUserAdmin");
  }, [dispatch, id]);
  return (
    <main>
      <div className={styles.mainDetailGameAdmin}>
        <section className={styles.sectionInformationGame}>
          <button className={styles.buttonEditInformationGame}>
            <i className="bi bi-pencil-square"></i>
          </button>
          <span className={styles.textInformationDetailGame}>Information</span>
          <div className={styles.flexContainerInformationGame}>
            <div className={styles.containerImageDetailGameAdmin}>
              <img src={user?.profilePicture} alt={user?.name} />
            </div>
            <div className={styles.containerSpanInformationGame}>
              <h4>{user?.name}</h4>
              <span>
                <b>Country</b> {user?.country? user?.country : "No country"}
              </span>
              <span>
                <b>Age</b> {user?.age}
              </span>
              <span>
                <b>Status:</b> {user?.isBanned === false ? "Active" : "Banned"}
              </span>
              <span>
                <b>Created:</b> {user?.creado}
              </span>
              <span>
                <b>total orders:</b> {user.orders?.length}
              </span>
            </div>
          </div>
        </section>
        <div className={styles.containerEstatistics}>
          <Chart
            Data={user?.orders?.map((order) => order.amount)}
            Label={user?.orders?.map((order) => order.id)}
            dimensions={{ widthLineal: 20, heigth: 25, width: 120 }}
          ></Chart>
        </div>
      </div>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>#</th>
            <th>Games</th>
            <th>Date</th>
            <th>Amount</th>
            <th>status</th>
            <th>StripeId</th>
          </tr>

          {user.orders?.length
            ? user.orders.map((user, index) => (
                <tr key={index} className={styles.tableColumns}>
                  <td className={styles.columnIdGame}>{user.id}</td>
                    <td className={styles.columnNameGame}>
                  {user.games?.map((game , index) => (
                        <div key={index} className={styles.containerImageNameGame}>
                            <img src={game.image} alt={game.name} />
                            <span>{game.name}</span>
                        </div>
                    ))}
                    </td>
                  <td className={styles.columnPriceGame}>{user.creado}</td>
                  <td className={styles.columnRatingGame}>{user.amount}</td>
                  <td className={user.state ==="succeeded" ? styles.columnStatusGame : styles.isBanned}>{user.state === "succeeded" ? user.state : "Failed"}</td>
                  <td className={styles.columnActionGame}>
                    <div>
                      {user.stripeId}
                    </div>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </main>
  );
};

export default Adminuser;
