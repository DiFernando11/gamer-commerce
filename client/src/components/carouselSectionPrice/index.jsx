import React from "react";
import "./index.css";
import FilterCombination from "../filterCombination";
import { useSelector } from "react-redux";

import CarouselButtons from "../carouselButtons";

function CarosuelSectionPrice() {
  //estados globales
  const videoGames = useSelector((state) => state.videoGames1);
  //estados locales



  return (
    <div>
      <FilterCombination />
      <CarouselButtons image={videoGames} category={false} />
    </div>
  );
}

export default CarosuelSectionPrice;
