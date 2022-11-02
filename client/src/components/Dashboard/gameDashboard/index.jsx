import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteGame,
  getAllGames,
  orderAmountGameAdmin,
  updateInfo,
  sendEmail,
  changeStatusGameUser,
} from "../../../redux/actions";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function GameDashBoard() {
  const allGames = useSelector((state) => state.allGames);
  const [viewElements, setViewElements] = useState(1);
  const [orderAmount, setOrderAmount] = useState("All");
  const [refreshUpdate, setRefreshUpdate] = useState(false);
  let dispatch = useDispatch();
  const [input, setInput] = useState(0);
  // const [errors, setErrors] = useState({});
  let postsPerPage = 20;
  const lastPostIndex = viewElements * postsPerPage; // 4 //8
  const currentPosts = allGames?.slice(0, lastPostIndex);

  const deletegame = (id, banned, name) => {
    Swal.fire({
      html: banned
        ? `<h3>You are going to disable <br/> ${name}. <br /> Are you sure?</h3>`
        : `<h3>You are going to enable <br/> ${name} <br /> Are you sure?</h3>`,
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteGame(id, banned));
        dispatch(changeStatusGameUser(id));
        setRefreshUpdate(!refreshUpdate);
      }
    });
  };

  const handleFilterOrdersGame = (order, idCheckbox, attribute, e) => {
    var isChecked = document.getElementById(idCheckbox).checked;
    if (!isChecked) {
      setOrderAmount("All");
      dispatch(orderAmountGameAdmin("All"));
    } else {
      setOrderAmount(e.target.value);
      dispatch(orderAmountGameAdmin(order, attribute));
    }
  };
  // function validate(input) {
  //   let errors = {};
  //   if (input.discount < 1 || input.discount > 100) {
  //     errors.discount = "between 1 and 100";
  //   }
  //   return errors;
  // }

  const handleChange = (e) => {
    setInput(parseInt(e.target.value, 10));
    // setErrors(
    //   validate({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  };
  const handleSubmit = (e, id, discount, price, name) => {
    e.preventDefault();
    Swal.fire({
      html: `<h3>You are going to apply a discount of %${discount} to ${name} <br /> Are you sure?</h3>`,
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(discount)
        if( discount !== 0){
          const discountPrice = price * (discount / 100);
          dispatch(updateInfo(id, Number(discountPrice.toFixed(2))));
          dispatch(changeStatusGameUser(id, Number(discountPrice.toFixed(2))));
          setRefreshUpdate(!refreshUpdate);
        }else{
          dispatch(updateInfo(id, discount));
          dispatch(changeStatusGameUser(id, discount));
          setRefreshUpdate(!refreshUpdate);
        }
      }
    });
  };
  const handleClick = () => {
    Swal.fire({
      icon: "warning",
      html: "<h3>You are about to send a promotional email</h3><br><h3>Are you sure?</h3>",
      showDenyButton: true,
      denyButtonText: "Cancel",
      confirmButtonText: "Yes",
      confirmButtonColor: "#4BB543",
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(sendEmail());
      }
    });
  };
  useEffect(() => {
    return () => dispatch(getAllGames());
  }, [dispatch]);
  return (
    <section className={styles.mainGamesAllDashboard}>
      <div className={styles.containerFlexInputOrdersgame}>
        <div>
          <label htmlFor="idOrderAmountCheck">
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
          <label htmlFor="idOrderRatingCheck">
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
          <label htmlFor="idFilterActiveCheck">
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
          <label htmlFor="idFilterPurchasedUpperCheck">
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
        <div className={styles.containerFlexButtons}>
          <label htmlFor="idFilterPurchasedTodayCheck">
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
                    30,
                    e
                  )
                }
              />
            </div>
          </label>
          <button className={styles.buttonOffertsGames} onClick={handleClick}>
            Send promotional email
          </button>
        </div>
      </div>
      <table className={styles.tableGames}>
        <tbody>
          <tr className={styles.tableTitles}>
            <th id={styles["id"]}>ID</th>
            <th id={styles["game"]}>Game</th>
            <th id={styles["price"]}>Price</th>
            <th id={styles["discount-price"]}>Discount Price</th>
            <th id={styles["has-discount"]}>Has discount?</th>
            <th id={styles["rating"]}>Rating</th>
            <th id={styles["status"]}>Status</th>
            <th id={styles["action"]}>Action</th>
            <th id={styles["discount"]}>Discount</th>
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
                <td className={styles.columnRatingGame}>
                  {game.with_discount ? "Yes" : "No"}
                </td>
                <td className={styles.columnRatingGame}>{game.rating}</td>
                <td
                  className={
                    game.show === true
                      ? styles.columnStatusGame
                      : styles.columnStatusGamebanned
                  }
                >
                  {game.show === true ? "Active" : "No Active"}
                </td>
                <td className={styles.columnActionGame}>
                  <div>
                    <span className={styles.columnActionView}>View</span>
                    <button
                      className={styles.columnActionDelete}
                      type="submit"
                      onClick={() => deletegame(game.id, game.show, game.name)}
                    >
                      {game.show ? "Disable" : "Enable"}
                    </button>
                  </div>
                </td>
                <td className={styles.columnPriceGame}>
                  <form
                    onSubmit={(e) =>
                      handleSubmit(e, game.id, input, game.price, game.name)
                    }
                  >
                    <input
                      className={styles.inputdiscount}
                      type="number"
                      name="discount"
                      value={input.discount}
                      placeholder="discount"
                      max={100}
                      min={0}
                      onChange={(e) => handleChange(e)}
                    />
                    %
                    {/* {errors.discount && (
                      <p className={styles.error}>{errors.discount}</p>
                    )}
                    {errors.hasOwnProperty("discount") ? (
                      <p className={styles.adv}></p>
                    ) : ( */}
                    <button type="submit" className={styles.buttoncount}>
                      add
                    </button>
                    {/* )} */}
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
