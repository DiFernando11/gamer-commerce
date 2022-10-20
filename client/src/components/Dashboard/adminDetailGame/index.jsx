import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../../redux/actions";
import Chart from "../chart";
import Featured from "../featured";
import styles from "./index.module.css";

const AdminDetailGame = () => {
  const game = useSelector((state) => state.Details);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);
  console.log(game);
  const allGames = useSelector((state) => state.allGames);

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
              <img src={game.image} alt={game.name} />
            </div>
            <div className={styles.containerSpanInformationGame}>
              <h4>{game.name}</h4>
              <span>
                <b>Rating:</b> {game.rating}
              </span>
              <span>
                <b>Price:</b> {game.price}$
              </span>
              <span>
                <b>Status:</b> Active
              </span>
              <span>
                <b>Total de compras:</b> 4
              </span>
              <span className={styles.textYearsGameDetailAdmin}>
                {game.released}
              </span>
            </div>
          </div>
        </section>
        <div className={styles.containerEstatistics}>
          <Chart
            dimensions={{ widthLineal: 600, heigth: 25, width: 120 }}
          ></Chart>
        </div>
      </div>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>#</th>
            <th>User</th>
            <th>Game</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>

          {allGames.length
            ? allGames.map((game, index) => (
                <tr key={index} className={styles.tableColumns}>
                  <td className={styles.columnIdGame}>{game.id}</td>
                  <td className={styles.columnNameGame}>
                    <img src={game.image} alt={game.name} />
                    <span>{game.name}</span>
                  </td>
                  <td className={styles.columnPriceGame}>{game.price}$</td>
                  <td className={styles.columnRatingGame}>{game.rating}</td>
                  <td className={styles.columnStatusGame}>Active</td>
                  <td className={styles.columnActionGame}>
                    <div>
                      <span className={styles.columnActionView}>View</span>
                      <span className={styles.columnActionDelete}>Delete</span>
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

export default AdminDetailGame;
