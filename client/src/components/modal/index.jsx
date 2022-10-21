import React from "react";
import styles from "./index.module.css";

function Modal({ children, title }) {
  return (
    <>
      <div className={styles.container_modal}>
        <div className={styles.modal}>
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
