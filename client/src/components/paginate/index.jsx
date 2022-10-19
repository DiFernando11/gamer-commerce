import React, { useState } from "react";
import { pagesCurrent, numberPage } from "../../utils/utils.js";
import GameCard from "../gamesCard/index.jsx";
import styles from "./index.module.css";

export default function Paginado({ videoGames }) {
  let [statePageVideoGame, setStatePageVideoGame] = useState(1);
  const videoGamesLength = videoGames.length;
  const handleChangePage = (page) => {
    setStatePageVideoGame(page);
  };
  const pagesCurrents = pagesCurrent(videoGames, statePageVideoGame, 9);
  const numberPagesLength = Math.ceil(videoGamesLength / 9);
  const numberPages = numberPage(numberPagesLength);

  const nextPage = () => {
    setStatePageVideoGame(
      statePageVideoGame === numberPages.length ? 1 : statePageVideoGame + 1
    );
  };
  const prevPage = () => {
    setStatePageVideoGame(
      statePageVideoGame === 1 ? numberPages.length : statePageVideoGame - 1
    );
  };

  return (
    <section className="paginated">
      <div className={styles.container_grid_cardsGame}>
        {pagesCurrents.length
          ? pagesCurrents.map((game, index) => (
              <GameCard key={index} game={game} category={true} />
            ))
          : null}
      </div>
      <div className={styles.pages_destokp}>
        <button onClick={prevPage} className={styles.inactivePage}>
          <i className="bi bi-chevron-left"></i>
        </button>
        {numberPages.length
          ? numberPages.map((page , index) => (
              <button key={index}
                className={`${styles.button_page}
                  ${
                    statePageVideoGame === page
                      ? styles.activePage
                      : styles.inactivePage
                  }`}
                onClick={() => handleChangePage(page)}
              >
                {page}
              </button>
            ))
          : null}
        <button className={`${styles.pageCurrentMobile} ${styles.activePage}`}>
          {statePageVideoGame}
        </button>
        <button className={styles.inactivePage} onClick={nextPage}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}
