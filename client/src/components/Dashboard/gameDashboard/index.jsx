import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteGame,
  getAllGames,
  orderAmountGameAdmin,
  updateInfo,
} from "../../../redux/actions";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function GameDashBoard() {
  const allGames = useSelector((state) => state.allGames);
  const [viewElements, setViewElements] = useState(1);
  const [orderAmount, setOrderAmount] = useState("All");
  let dispatch = useDispatch();
  const [input, setInput] = useState(0);
  const [active, setActive] = React.useState(true);

  let postsPerPage = 20;
  const lastPostIndex = viewElements * postsPerPage; // 4 //8
  const currentPosts = allGames?.slice(0, lastPostIndex);

  const deletegame = (id, banned) => {
    dispatch(updateInfo(id, banned));
    setActive(!active);
  };

  const handleFilterOrdersGame = (order, idCheckbox, attribute, e) => {
    var isChecked = document.getElementById(idCheckbox).checked;
    // if (isChecked) document.getElementById(idCheckbox).checked = false;if
    if (!isChecked) {
      setOrderAmount("All");
      dispatch(orderAmountGameAdmin("All"));
    } else {
      setOrderAmount(e.target.value);
      dispatch(orderAmountGameAdmin(order, attribute));
    }
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
  const handleChange = (e) => {
		setInput(parseInt(e.target.value, 10));
	};
	const handleSubmit = (e, id, discount, price, name) => {
		e.preventDefault();
    Swal.fire({
      html: (`<h3>You are going to apply a discount of %${discount} to ${name} <br /> Are you sure?</h3>`),
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const discountPrice = price * (discount/100)
        console.log(discountPrice)
        dispatch(updateInfo(id, discountPrice)).then(dispatch(getAllGames())).catch(dispatch(getAllGames()));
        
      }
	});
}
  return (
    <section className={styles.mainGamesAllDashboard}>
      <div className={styles.containerFlexInputOrdersgame}>
        <div>
          <label htmlFor="inputOrderAmount">
            <p> Amount Orders</p>
            <div className={styles.containerInputOrders}>
              <i className={`bi bi-arrow-up ${styles.iconLowerFilters}`}></i>
              <input
                className={styles.inputOrderFilter}
                id="idOrderAmountCheck"
                type={"checkbox"}
                name="orderAmount"
                value={"mayorAmount"}
                checked={orderAmount === "mayorAmount" ? true : false}
                onChange={(e) =>
                  handleFilterOrdersGame(
                    "MAYOR",
                    "idOrderAmountCheck",
                    "price",
                    e
                  )
                }
              />
              <input
                className={styles.inputOrderFilter}
                id="idOrderAmountCheckLower"
                type={"checkbox"}
                name="orderAmount"
                value={"menorAmount"}
                checked={orderAmount === "menorAmount" ? true : false}
                onChange={(e) =>
                  handleFilterOrdersGame(
                    "MENOR",
                    "idOrderAmountCheckLower",
                    "price",
                    e
                  )
                }
              />
              <i className={`bi bi-arrow-down ${styles.upperIconFilters}`}></i>
            </div>
          </label>
          <label htmlFor="inputOrderRating">
            <p>Rating Orders</p>
            <div className={styles.containerInputOrders}>
              <i className={`bi bi-arrow-up ${styles.iconLowerFilters}`}></i>
              <input
                className={styles.inputOrderFilter}
                id="idOrderRatingCheck"
                type={"checkbox"}
                value={"mayorRating"}
                checked={orderAmount === "mayorRating" ? true : false}
                onChange={(e) =>
                  handleFilterOrdersGame(
                    "MAYOR",
                    "idOrderRatingCheck",
                    "rating",
                    e
                  )
                }
              />
              <input
                className={styles.inputOrderFilter}
                id="idOrderRatingCheckLower"
                type={"checkbox"}
                value={"menorRating"}
                checked={orderAmount === "menorRating" ? true : false}
                onChange={(e) =>
                  handleFilterOrdersGame(
                    "MENOR",
                    "idOrderRatingCheckLower",
                    "rating",
                    e
                  )
                }
              />
              <i className={`bi bi-arrow-down ${styles.upperIconFilters}`}></i>
            </div>
          </label>
          <label htmlFor="inputFilterStatus">
            <p>Status game</p>
            <div className={styles.containerInputOrders}>
              <i className={`bi bi-circle-fill ${styles.iconLowerFilters}`}></i>
              <input
                className={styles.inputOrderFilter}
                id="idFilterActiveCheck"
                type={"checkbox"}
                value={"showIsActive"}
                checked={orderAmount === "showIsActive" ? true : false}
                onChange={(e) =>
                  handleFilterOrdersGame(
                    "ACTIVE",
                    "idFilterActiveCheck",
                    "show",
                    e
                  )
                }
              />
              <input
                className={styles.inputOrderFilter}
                id="idFilterDisabledCheck"
                type={"checkbox"}
                value={"showIsDisabled"}
                checked={orderAmount === "showIsDisabled" ? true : false}
                onChange={(e) =>
                  handleFilterOrdersGame(
                    "DISABLED",
                    "idFilterDisabledCheck",
                    "show",
                    e
                  )
                }
              />
              <i
                className={`bi bi-circle-fill ${styles.upperIconFilters} `}
              ></i>
            </div>
          </label>
          <label htmlFor="inputFilterPurchased">
            <p> Purchased game</p>
            <div className={styles.containerInputOrders}>
              <i className={`bi bi-arrow-up ${styles.iconLowerFilters}`}></i>
              <input
                className={styles.inputOrderFilter}
                id="idFilterPurchasedUpperCheck"
                type={"checkbox"}
                value={"statePurchasedUpper"}
                checked={orderAmount === "statePurchasedUpper" ? true : false}
                onChange={(e) =>
                  handleFilterOrdersGame(
                    "STATESUCCESUPPER",
                    "idFilterPurchasedUpperCheck",
                    "state",
                    e
                  )
                }
              />
              <input
                className={styles.inputOrderFilter}
                id="idFilterPurchasedLowerCheck"
                type={"checkbox"}
                value={"statePurchasedLower"}
                checked={orderAmount === "statePurchasedLower" ? true : false}
                onChange={(e) =>
                  handleFilterOrdersGame(
                    "STATESUCCESLOWER",
                    "idFilterPurchasedLowerCheck",
                    "state",
                    e
                  )
                }
              />
              <i className={`bi bi-arrow-down ${styles.upperIconFilters}`}></i>
            </div>
          </label>
        </div>
        <label>
          <p> Purchased Temporal</p>
          <div className={styles.containerInputOrders}>
            <i
              className={`bi bi-calendar-day ${styles.inputTemporalPurchased}`}
            ></i>
            <input
              className={styles.inputOrderFilter}
              id="idFilterPurchasedTodayCheck"
              type={"checkbox"}
              value={"statePurchasedToday"}
              checked={orderAmount === "statePurchasedToday" ? true : false}
              onChange={(e) =>
                handleFilterOrdersGame(
                  "PURCHASEDTODAY",
                  "idFilterPurchasedTodayCheck",
                  "",
                  e
                )
              }
            />
            <input
              className={styles.inputOrderFilter}
              id="idFilterPurchasedWeekendCheck"
              type={"checkbox"}
              value={"statePurchasedWeekend"}
              checked={orderAmount === "statePurchasedWeekend" ? true : false}
              onChange={(e) =>
                handleFilterOrdersGame(
                  "PURCHASEDWEEKEDGAME",
                  "idFilterPurchasedWeekendCheck",
                  3,
                  e
                )
              }
            />
            <input
              className={styles.inputOrderFilter}
              id="idFilterPurchasedMonthCheck"
              type={"checkbox"}
              value={"statePurchasedMonth"}
              checked={orderAmount === "statePurchasedMonth" ? true : false}
              onChange={(e) =>
                handleFilterOrdersGame(
                  "PURCHASEDWEEKEDGAME",
                  "idFilterPurchasedMonthCheck",
                  26,
                  e
                )
              }
            />
          </div>
        </label>
      </div>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th>ID</th>
            <th>Game</th>
            <th>Price</th>
            <th>Discount Price</th>
            <th>Has discount?</th>
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
                <td className={styles.columnRatingGame}>${game.discount}</td>
                <td className={styles.columnRatingGame}>{game.with_discount ? "Yes" : "No"}</td>
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
                  <form onSubmit={(e) => handleSubmit(e, game.id, input, game.price, game.name)}>
                    <input
                      className={styles.inputdiscount}
                      type="number"
                      name="name"
                      placeholder="put discount"
                      onChange={(e) => handleChange(e)}
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
