import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTop12 } from "../../redux/actions";
import CarouselGenres from "../carouselGenres";
import CarrouselPunctuation from "../carouselPunctuation";
import CarrouselRecommended from "../carouselRecommended";
import CarosuelSectionPrice from "../carouselSectionPrice";
import Header from "../header";
import LiveVideoGame from "../liveVideoGame";

function Home() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getTop12());
    
  }, [dispatch]);

  return (
    <main>   
      <Header />
      {
        games.length > 0 ? (
          <CarrouselRecommended videoGames={games} category={false} />
        ) : (
          <h1>Loading...</h1>
        )
      }
      <CarosuelSectionPrice />
      <CarouselGenres />
      <CarrouselPunctuation />
      <LiveVideoGame />
    </main>
  );
}

export default Home;
