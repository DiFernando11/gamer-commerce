import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRefreshUpdate } from "../../redux/actions";
import CardPruchaseGame from "../cardPurchaseGame";
import FormStripe from "../formStripe";
import styles from "./index.module.css";

function YourCart() {
  const [videoGame, setVideoGame] = useState([]);
  // const [changeLocalStorage, setChangeLocalStorage] = useState(false);
  const refreshUpdate = useSelector((state) => state.stateRefreshUpdate);
  const dispatch = useDispatch();
  const getData = () => {
    return JSON.parse(localStorage.getItem("name"));
  };
  useEffect(() => {
    setVideoGame(getData());
  }, [refreshUpdate]);
  const handleDeleteAllLocalStorage = () => {
    localStorage.clear();
    dispatch(setRefreshUpdate());
  };

  const gameLocalStorage = JSON.parse(localStorage.getItem("name")) || [];
  console.log(gameLocalStorage)

  const valueTotal = videoGame
    ? videoGame.reduce((current, nextValue) => current + nextValue.price, 0)
    : 0;

  return (
    <main className={styles.mainCarts}>
      <h1>TU CARRITO DE COMPRAS</h1>
      <div className={styles.containerCarts}>
        <div className={styles.containerCartsPurchase}>
          {videoGame ? (
            videoGame.map((game, index) => (
              <CardPruchaseGame key={index} game={game} />
            ))
          ) : (
            <p>No hay nada</p>
          )}
          <div className={styles.purchaseTotal}>
            <div className={styles.purchaseAcepted}>
              <div className={styles.textTotal}>
                <span>Total estimado</span>
                <span>{valueTotal}$</span>
              </div>
              <button>Comprar</button>
            </div>
            <div className={styles.containerShoopingContinue}>
              <button className={styles.continueShopping}>
                Seguir comprando
              </button>
              <span
                onClick={handleDeleteAllLocalStorage}
                className={styles.deleteAllProducts}
              >
                Eliminar todos los articulos
              </span>
            </div>
          </div>
        </div>
        <FormStripe/>
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
