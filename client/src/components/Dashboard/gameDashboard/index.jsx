import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteGame, getAllGames } from "../../../redux/actions";
import { Link } from "react-router-dom";


function GameDashBoard() {
  const allGames = useSelector((state) => state.allGames);
  let dispatch = useDispatch();
  const [active, setActive] = React.useState(true);

  useEffect(() => {
    return () => dispatch(getAllGames());
  }, [dispatch]);

  const deletegame = (id , banned) => {
    dispatch(deleteGame(id, banned));
    setActive(!active);
  };

  function validate (input,) {
    let errors = {}
   
    if (input.discount < 1 || input.discount > 100) {
        errors.attack = "discount points must be between 1 and 100"
    }
    
    return errors
}

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
            <th>discount</th>
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
                  <td className={styles.columnPriceGame}>${game.price}</td>
                  <td className={styles.columnRatingGame}>{game.rating}</td>
                  <td className={styles.columnStatusGame}>{game.show === true ? "Active" : "No Active"}</td>
                  <td className={styles.columnActionGame}>
                    <div>
                      <span className={styles.columnActionView}>View</span>
                      <button className={styles.columnActionDelete}
                      type="submit"
                      onClick={() => deletegame(game.id, game.show)}
                      >Delete</button>
                    </div>
                  </td>
         
                  <td className={styles.columnPriceGame}>
                  <form>
                  
                  <input
                  className={styles.inputdiscount}
                  type="number"
                  name="name"
                  placeholder="put discount"
                  // onChange={(e) => handleChange(e)}
                  // value={input.name}
                   />%
                     <button type="submit" className={styles.buttoncount}
                     >add</button>
                     
                  </form>
                  
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
