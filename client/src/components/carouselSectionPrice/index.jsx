import React from "react";

import CarouselButtons from "../carouselButtons";
import FilterCombination from "../filterCombination";
import { useSelector } from "react-redux";

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
