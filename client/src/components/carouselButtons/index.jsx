import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./index.css";

function CarouselButtons({ image, category }) {
  let [statePageVideoGame, setStatePageVideoGame] = useState(1);

  const imageVideoGameLength = Math.ceil(image.length / 4);
  let postsPerPage = 4;
  const lastPostIndex = statePageVideoGame * postsPerPage; // 4 //8
  const firstPostIndex = lastPostIndex - postsPerPage; //0 // 4
  const currentPosts = image.slice(firstPostIndex, lastPostIndex);
  const pages = [];
  for (let index = 1; index < imageVideoGameLength + 1; index++) {
    pages.push(index);
  }

  const handleNextCardImagesVideoGame = () => {
    setStatePageVideoGame(
      statePageVideoGame === imageVideoGameLength ? 1 : statePageVideoGame + 1
    );
  };
  const handlePrevCardImagesVideoGame = () => {
    setStatePageVideoGame(
      statePageVideoGame === 1 ? imageVideoGameLength : statePageVideoGame - 1
    );
  };

  return (
    <div className={style.colums}>
      <div className="container_buttonNextPrev">
        <button
          className={style.button}
          onClick={handlePrevCardImagesVideoGame}
        >
          PREVIOUS
        </button>

        {!category && currentPosts.length
          ? currentPosts.map((videoGame, index) => (
              <Link key={index} to={`detail/${videoGame.name}`}>
                <img
                  className="videoGamesImagesControlCarousel"
                  src={videoGame.img}
                  alt={"carousel images"}
                />
              </Link>
            ))
          : currentPosts.map((videoGame, index) => (
              <Link to={`genres/${videoGame.name}`}>
                <div>
                  <h1> {videoGame.category}</h1>
                  <img
                    className="videoGamesImagesControlCarousel"
                    key={index}
                    src={videoGame.img}
                    alt={"carousel images"}
                  />
                </div>
              </Link>
            ))}

        <button
          className={style.button}
          onClick={handleNextCardImagesVideoGame}
        >
          NEXT
        </button>
      </div>
      {pages.length &&
        pages.map((page) => (
          <button
            className={`button_page_navigation ${
              page === statePageVideoGame && "activity_page"
            }`}
            key={page}
          ></button>
        ))}
    </div>
  );
}

export default CarouselButtons;
