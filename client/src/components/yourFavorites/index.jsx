import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isPurchasedGame } from "../../utils/utils";
import styles from "./index.module.css";
import Swal from "sweetalert2";
import { postFavoriteAddDb } from "../../redux/actions";

function YourFavorities({ nameGame }) {
  const user = useSelector((state) => state.user);
  const favs = useSelector(state => state.favoriteUser)
  let dispatch = useDispatch();
  // let boolean = JSON.parse(localStorage.getItem("favorite")).some((game) => game.id === nameGame.id)
  const [boolean, setBoolean] = useState(
    (JSON.parse(localStorage.getItem("favorite")) ? JSON.parse(localStorage.getItem("favorite")).some((game) => game.id === nameGame.id) 
    : []?.some((game) => game.id === nameGame.id)) || 
      favs?.some((game) => game.gameId === nameGame.id)
  );

  const saveGamesFavorites = async () => {
    const favoriteLocalStorage =
      JSON.parse(localStorage.getItem("favorite")) || [];
    if (!favoriteLocalStorage.some((game) => game.id === nameGame.id)) {
      setBoolean(true);
      const newGameFavorite = [...favoriteLocalStorage, nameGame] || [];
      localStorage.setItem("favorite", JSON.stringify(newGameFavorite));
      if (Object.entries(user).length) {
        dispatch(postFavoriteAddDb({ userid: user?.id, gameid: nameGame.id }));
      }
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        iconColor: "white",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        customClass: {
          popup: styles.coloredSuccede,
          title: styles.titles,
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      await Toast.fire({
        icon: "success",
        title: "Added to favorites",
      });
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        iconColor: "white",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        customClass: {
          popup: styles.coloredWarning,
          title: styles.titles,
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      await Toast.fire({
        icon: "warning",
        title: "Already in favorites",
      });
    }
  };
  const purchasedGameUser = isPurchasedGame(user, nameGame);
 
  return (
    <div className={styles.favoritesContainerGames}>
      {purchasedGameUser ? (
        <span className={styles.purchasedCard}>Purchased</span>
      ) : boolean ? (
        <i className={`bi bi-heart-fill`} onClick={saveGamesFavorites}></i>
      ) : (
        <i className={`bi bi-heart`} onClick={saveGamesFavorites}></i>
      )}
    </div>
  );
}

export default YourFavorities;
