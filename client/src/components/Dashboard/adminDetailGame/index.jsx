import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../../redux/actions";
import styles from "./index.module.css";

const AdminDetailGame = () => {
  const game = useSelector((state) => state.Details);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);
  console.log(game);
  return (
    <main className={styles.mainDetailGameAdmin}>
      <section className={styles.sectionInformationGame}>
        <button className={styles.buttonEditInformationGame}>
          <i className="bi bi-pencil-square"></i>
        </button>
        <span className={styles.textInformationDetailGame}>Information</span>
        <div className={styles.flexContainerInformationGame}>
          <div className={styles.containerImageDetailGameAdmin}>
            <img src={game.image} alt={game.name} />
          </div>
          <div className={styles.containerSpanInformationGame}>
            <h4>{game.name}</h4>
            <span>Rating: {game.rating}</span>
            <span>Price: {game.price}$</span>
            <span>Status: Active</span>
            <span>Total de compras: 4</span>
            <span>{game.released}</span>
          </div>
        </div>
      </section>
      <div></div>
    </main>
  );
};

export default AdminDetailGame;
