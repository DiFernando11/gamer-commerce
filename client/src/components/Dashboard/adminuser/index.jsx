import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Adminuser = () => {
  const allGames = useSelector((state) => state.allGames);
  //   let dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(getAllGames());
  //   }, [dispatch]);

  return (
    <section className={styles.mainGamesAllDashboard}>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>ID</th>
            <th>User</th>
            <th>Email</th>
            <th>Age</th>
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
                      to={`/admin/games/${game.id}`}
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
};

export default Adminuser;
