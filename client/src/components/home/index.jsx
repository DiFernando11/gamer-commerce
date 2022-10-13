import React from "react";
import CarouselGenres from "../carouselGenres";
import CarrouselPunctuation from "../carouselPunctuation";
import CarrouselRecommended from "../carouselRecommended";
import CarosuelSectionPrice from "../carouselSectionPrice";
import Footer from "../footer";

function Home() {
  return (
    <main>
      <CarrouselRecommended />
      <CarosuelSectionPrice />
      <CarouselGenres />
      <CarrouselPunctuation />
    </main>
  );
}

export default Home;
