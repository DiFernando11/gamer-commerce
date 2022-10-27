import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteGame, getAllGames } from "../../../redux/actions";
import { Link } from "react-router-dom";

function GameDashBoard() {
  const allGames = useSelector((state) => state.allGames);
  const [viewElements, setViewElements] = useState(1);
  const [orderAmount, setOrderAmount] = useState("All");
  let dispatch = useDispatch();
  const [active, setActive] = React.useState(true);

  let postsPerPage = 20;
  const lastPostIndex = viewElements * postsPerPage; // 4 //8
  const currentPosts = allGames?.slice(0, lastPostIndex);
  console.log(currentPosts, "games");

  const deletegame = (id, banned) => {
    dispatch(deleteGame(id, banned));
    setActive(!active);
  };
  const handleOrderAmount = (order, idCheckbox, e) => {
    // var isChecked = document.getElementById(idCheckbox).checked;
    // if (isChecked) document.getElementById(idCheckbox).checked = false;
    setOrderAmount(e.target.value);
  };

  useEffect(() => {
    return () => dispatch(getAllGames());
  }, [dispatch]);

  function validate(input) {
    let errors = {};

    if (input.discount < 1 || input.discount > 100) {
      errors.attack = "discount points must be between 1 and 100";
    }

    return errors;
  }

  return (
    <section className={styles.mainGamesAllDashboard}>
      <div class="custom-control custom-switch">
        <label class="custom-control-label" for="customSwitch1">
          Toggle this switch element
        </label>
      </div>
      <input
        id="idOrderAmountCheck"
        type={"checkbox"}
        name="orderAmount"
        value={"MAYOR"}
        checked={orderAmount === "All" ? true : false}
        onChange={(e) => handleOrderAmount("MAYOR", "idOrderAmountCheck", e)}
      />
      <input
        id="idOrderAmountCheckLower"
        type={"checkbox"}
        name="orderAmount"
        value={"MENOR"}
        checked={orderAmount === "All" ? true : false}
        onChange={(e) =>
          handleOrderAmount("MENOR", "idOrderAmountCheckLower", e)
        }
      />
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
          {currentPosts?.length &&
            currentPosts.map((game, index) => (
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
                <td className={styles.columnStatusGame}>
                  {game.show === true ? "Active" : "No Active"}
                </td>
                <td className={styles.columnActionGame}>
                  <div>
                    <span className={styles.columnActionView}>View</span>
                    <button
                      className={styles.columnActionDelete}
                      type="submit"
                      onClick={() => deletegame(game.id, game.show)}
                    >
                      Delete
                    </button>
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
                    />
                    %
                    <button type="submit" className={styles.buttoncount}>
                      add
                    </button>
                  </form>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <span
        className={styles.seeMore}
        onClick={() => setViewElements(viewElements + 1)}
      >
        Ver mas
      </span>
    </section>
  );
}

export default GameDashBoard;
