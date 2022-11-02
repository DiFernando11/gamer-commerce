import React from "react";
import styles from "./index.module.css";
import Swal from "sweetalert2";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { numberGamesCarts, postCartAddDb } from "../../redux/actions";
import { isPurchasedGame } from "../../utils/utils";
function ButtonAddCarts({ nameGame }) {
  const user = useSelector((state) => state.user);

  let dispatch = useDispatch();
  const saveGamesToBuy = async () => {
    const gameLocalStorage = JSON.parse(localStorage.getItem("name")) || [];
    if (!gameLocalStorage.some((game) => game.id === nameGame.id)) {
      dispatch(numberGamesCarts(gameLocalStorage.length + 1));
      const newGameShooping = [...gameLocalStorage, nameGame] || [];
      localStorage.setItem("name", JSON.stringify(newGameShooping));
      if (Object.entries(user).length) {
        dispatch(postCartAddDb({ userid: user?.id, gameid: nameGame.id }));
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
        title: "Added to cart",
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
        title: "It is alredy in the cart",
      });
    }
  };
  const purchasedGameUser = isPurchasedGame(user, nameGame);

  return (
    <div>
      {!purchasedGameUser ? (
        <span
          className={styles.buttonAddCarts}
          onClick={() => saveGamesToBuy()}
        >
          Add to cart <i className="bi bi-cart3"></i>
        </span>
      ) : (
        <span className={styles.buttonAddCarts}>
          Purchased <i className="bi bi-cart3"></i>
        </span>
      )}
    </div>
  );
}

export default ButtonAddCarts;
