import React from "react";
import { useSelector } from "react-redux";
import CarouselButtons from "../carouselButtons";

function CarrouselPunctuation() {
  const videoGames = useSelector((state) => state.videoGames);
  return (
    <section className="carousel_puntuaction">
      <CarouselButtons image={videoGames} category={false} />
    </section>
  );
}

export default CarrouselPunctuation;
