import React from "react";
import CarouselGenres from "../carouselGenres";
import CarrouselPunctuation from "../carouselPunctuation";
import CarrouselRecommended from "../carouselRecommended";
import CarosuelSectionPrice from "../carouselSectionPrice";
import NavBar from "../nav-bar";

function Home() {
  return (
    <main>
      <NavBar />
      <CarrouselRecommended />
      <CarosuelSectionPrice />
      <CarouselGenres />
      <CarrouselPunctuation />
    </main>
  );
}

export default Home;
