import React from "react";
import styles from "./index.module.css";
import logoCard from "../../source/logoCredit__2_-removebg-preview.png";

function Modal({ children, title }) {
  return (
    <>
      <div className={styles.container_modal}>
        <div className={styles.modal}>
          <img
            className={styles.imageLogoCardCredit}
            src={logoCard}
            alt="logo Card credit"
          />
          <div className={styles.encabezado_modal}>
            <h3>{title}</h3>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
