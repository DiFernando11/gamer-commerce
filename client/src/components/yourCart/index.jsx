import React from "react";
import CardPruchaseGame from "../cardPurchaseGame";
import styles from "./index.module.css";

function YourCart() {
  return (
    <main className={styles.mainCarts}>
      <h1>TU CARRITO DE COMPRAS</h1>
      <div className={styles.containerCarts}>
        <div className={styles.containerCartsPurchase}>
          <CardPruchaseGame />
          <CardPruchaseGame />
          <CardPruchaseGame />
          <div className={styles.purchaseTotal}>
            <div className={styles.purchaseAcepted}>
              <div className={styles.textTotal}>
                <span>Total estimado</span>
                <span>60$</span>
              </div>
              <button>Comprar</button>
            </div>
            <div className={styles.containerShoopingContinue}>
              <button className={styles.continueShopping}>
                Seguir comprando
              </button>
              <span className={styles.deleteAllProducts}>
                Eliminar todos los articulos
              </span>
            </div>
          </div>
        </div>
        <div className={styles.flexCardsOffertsMobile}>
          <div className={styles.containerCardOffers}>
            <img
              src="https://as01.epimg.net/meristation/imagenes/2022/07/07/noticias/1657200253_597984_1657200366_noticia_normal.jpg"
              alt=""
            />
            <div className={styles.containerTextOffers}>
              <span className={styles.discount}>-50%</span>
              <div className={styles.priceCurrentText}>
                <span>$24.99</span>
                <span>$12.49 USD</span>
              </div>
              <span className={styles.textOfertsDailys}>!oferta del dia!</span>
            </div>
          </div>
          <div className={styles.containerCardOffers}>
            <img
              src="https://as01.epimg.net/meristation/imagenes/2022/07/07/noticias/1657200253_597984_1657200366_noticia_normal.jpg"
              alt=""
            />
            <div className={styles.containerTextOffers}>
              <span className={styles.discount}>-50%</span>
              <div className={styles.priceCurrentText}>
                <span>$24.99</span>
                <span>$12.49 USD</span>
              </div>
              <span className={styles.textOfertsDailys}>!oferta del dia!</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default YourCart;
