import React from "react";
import CarouselGenres from "../carouselGenres";
import CarrouselPunctuation from "../carouselPunctuation";
import CarrouselRecommended from "../carouselRecommended";
import CarosuelSectionPrice from "../carouselSectionPrice";
import LiveVideoGame from "../liveVideoGame";
import NavBar from "../nav-bar";


function Home() {
  return (
    <main>
      <NavBar />
      <CarrouselRecommended />
      <CarosuelSectionPrice />
      <CarouselGenres />
      <CarrouselPunctuation />
      <LiveVideoGame />
    </main>
  );
}

export default Home;
