import React from "react";
import styles from "./index.module.css";
import Swal from "sweetalert2";
import 'animate.css'
function ButtonAddCarts({ nameGame }) {
  const saveGamesToBuy = async () => {
    const gameLocalStorage = JSON.parse(localStorage.getItem("name")) || [];
    if (!gameLocalStorage.some((game) => game.id === nameGame.id)) {
      const newGameShooping = [...gameLocalStorage, nameGame] || [];
      localStorage.setItem("name", JSON.stringify(newGameShooping));
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        iconColor: 'white',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
          popup: styles.coloredSuccede,
          title: styles.titles
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      })
      await Toast.fire({
        icon: 'success',
        title: 'Agregado al carrito'
      })
    }else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        iconColor: 'white',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
          popup: styles.coloredWarning,
          title: styles.titles
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true
      })
      await Toast.fire({
        icon: 'warning',
        title: 'Ya se encuentra en el carrito'
      })
    }
  };
  

  return (
      <span className={styles.buttonAddCarts} onClick={() => saveGamesToBuy()}>
        Agregar al carrito <i className="bi bi-cart3"></i>
      </span>

  );
}

export default ButtonAddCarts;
