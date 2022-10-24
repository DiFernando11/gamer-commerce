import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberGamesCarts, setRefreshUpdate } from "../../redux/actions";
import CardPruchaseGame from "../cardPurchaseGame";
import FormStripe from "../formStripe";
import Modal from "../modal";
import styles from "./index.module.css";

function YourCart() {
  const [videoGame, setVideoGame] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const refreshUpdate = useSelector((state) => state.stateRefreshUpdate);
  const dispatch = useDispatch();
  const getData = () => {
    return JSON.parse(localStorage.getItem("name"));
  };

  const handleDeleteAllLocalStorage = () => {
    localStorage.removeItem("name");
    dispatch(numberGamesCarts(0));
    dispatch(setRefreshUpdate());
  };

  const valueTotal = videoGame
    ? videoGame.reduce((current, nextValue) => current + nextValue.price, 0)
    : 0;

  useEffect(() => {
    setVideoGame(getData());
  }, [refreshUpdate]);

  return (
    <main className={styles.mainCarts}>
      {/* <h1>YOUR SHOPPING CART {valueLength}</h1> */}
      <div className={styles.containerCarts}>
        <div className={styles.containerCartsPurchase}>
          {videoGame ? (
            videoGame.map((game, index) => (
              <CardPruchaseGame key={index} game={game} />
            ))
          ) : (
            <p>There is nothing</p>
          )}
          <div className={styles.purchaseTotal}>
            <div className={styles.purchaseAcepted}>
              <div className={styles.textTotal}>
                <span>Total estimated</span>
                <span>{valueTotal}$</span>
              </div>
              <button className={`${!videoGame?.length && styles.desactivedCartButtonShopping }`} onClick={() => setModalVisible(true)}>To buy</button>
            </div>
            <div className={styles.containerShoopingContinue}>
              <button className={styles.continueShopping}>
                <Link to={"/"} style={{ textDecoration: "none", color:"white" }}>
                  Keep buying
                </Link>
              </button>
              <span
                onClick={handleDeleteAllLocalStorage}
                className={styles.deleteAllProducts}
              >
                Remove all items
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
                <span>USD $12.49</span>
              </div>
              <span className={styles.textOfertsDailys}>!Deal of the day!</span>
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
              <span className={styles.textOfertsDailys}>!Deal of the day!</span>
            </div>
          </div>
        </div>
        {modalVisible ? (
          <Modal>
            <FormStripe />
            <button
              className={styles.cancelModalButton}
              onClick={() => setModalVisible(false)}
            >
              Cancel
            </button>
          </Modal>
        ) : null}
      </div>
    </main>
  );
}

export default YourCart;
