import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from "../../../redux/actions";
import { Link } from "react-router-dom";

function GameDashBoard() {
  const allGames = useSelector((state) => state.allGames);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  return (
    <section className={styles.mainGamesAllDashboard}>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>ID</th>
            <th>Game</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

          {allGames.length
            ? allGames.map((game, index) => (
                <tr key={index} className={styles.tableColumns}>
                  <td className={styles.columnIdGame}>{game.id}</td>
                  <td className={styles.columnNameGame}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/admin/games/detail/${game.id}`}
                    >
                      <img src={game.image} alt={game.name} />
                      <span>{game.name}</span>
                    </Link>
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
    </section>
  );
}

export default GameDashBoard;
