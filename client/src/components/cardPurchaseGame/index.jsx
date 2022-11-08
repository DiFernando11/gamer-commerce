import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCartUser,
  deleteFavoriteUser,
  numberGamesCarts,
  setRefreshUpdate,
} from "../../redux/actions";
import styles from "./index.module.css";

function CardPruchaseGame({ game, section = "buyCard" }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleDeleteCart = () => {
    const gameLocalStorage = JSON.parse(localStorage.getItem("name"));
    const newGameShooping = gameLocalStorage.filter(
      (gamers) => gamers.id !== game.id
    );
    localStorage.setItem("name", JSON.stringify(newGameShooping));
    if (Object.entries(user).length) {
      dispatch(deleteCartUser({ userid: user?.id, gameid: game.id }));
    }
    dispatch(setRefreshUpdate());
    dispatch(numberGamesCarts(gameLocalStorage.length - 1));
  };
  const handleDeleteCartFavorities = () => {
    const gameLocalStorage = JSON.parse(localStorage.getItem("favorite"));
    const newGameShooping = gameLocalStorage.filter(
      (gamers) => gamers.id !== game.id
    );
    localStorage.setItem("favorite", JSON.stringify(newGameShooping));
    if (Object.entries(user).length) {
      dispatch(deleteFavoriteUser({ userid: user?.id, gameid: game.id }));
    }
    dispatch(setRefreshUpdate());
  };

  return (
    <div className={styles.containerGameCart}>
      <span className={styles.price}>{ game.with_discount ? Number.isInteger(game.discount)
												? `U$D ${game.discount}.00`
												: `U$D ${game.discount}0` : `U$D ${game.price}.00`}</span>
      <Link to={`/detail/${game.id}`}>
        <img src={game.image} alt={game.name} />
      </Link>
      <span className={styles.nameGame}>{game.name}</span>
      {section === "purchased" && (
        <p className={styles.actionPruchasedGame}>Purchased</p>
      )}
      {section === "favoritesCard" && (
        <i
          className="bi bi-trash actionPruchasedGame"
          onClick={handleDeleteCartFavorities}
        ></i>
      )}
      {section === "buyCard" && (
        <i
          className="bi bi-trash actionPruchasedGame"
          onClick={handleDeleteCart}
        ></i>
      )}
    </div>
  );
}

export default CardPruchaseGame;
