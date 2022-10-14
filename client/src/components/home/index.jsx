import React from "react";
import CarouselGenres from "../carouselGenres";
import CarrouselPunctuation from "../carouselPunctuation";
import CarrouselRecommended from "../carouselRecommended";
import CarosuelSectionPrice from "../carouselSectionPrice";
import Header from "../header";

function Home() {
  return (
    <main>
      <Header />
      <CarrouselRecommended />
      <CarosuelSectionPrice />
      <CarouselGenres />
      <CarrouselPunctuation />
    </main>
  );
}

export default Home;
