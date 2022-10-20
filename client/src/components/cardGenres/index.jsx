import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

function CardGenres({ game }) {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={`genres/${game.name}`}>
        <h1 className={styles.tipo}> {game.name}</h1>
        <div className={styles.containerImageCategory}>
          <img
            className={styles.videoGamesImagesControlCarousel}
            src={game.image}
            height="190"
            width={200}
            alt={"carousel images"}
          />
        </div>
      </Link>
    </div>
  );
}

export default CardGenres;
