import React from "react";
import styles from "./index.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.containerSpanHomeHeader}>
        <span className={styles.logIn}>Iniciar Sesion</span>
        <span className={styles.carts}>
          Tu carrito <i className="bi bi-cart-plus"></i>
        </span>
      </div>
     
      <div className={styles.containerMainImagePage}></div>
    </header>
  );
}

export default Header;
