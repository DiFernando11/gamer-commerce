import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function CarouselButtons({ image }) {
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
    <div className="container_carrousel">
      <div className="container_buttonNextPrev">
        <button onClick={handlePrevCardImagesVideoGame}>PREVIOUS</button>
        {currentPosts.length &&
          currentPosts.map((videoGame, index) => (
            <Link to={`detail/${videoGame.name}`}>
              <img
                className="videoGamesImagesControlCarousel"
                key={index}
                src={videoGame.img}
                alt={"carousel images"}
              />
            </Link>
          ))}

        <button onClick={handleNextCardImagesVideoGame}>NEXT</button>
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
