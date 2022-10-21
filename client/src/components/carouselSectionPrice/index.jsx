import React, { useEffect } from "react";

import CarouselButtons from "../carouselButtons";
import FilterCombination from "../filterCombination";
import { useDispatch, useSelector } from "react-redux";
import { slice12Games, topPriceGame } from "../../redux/actions";

function CarosuelSectionPrice() {
  //estados globales
  const games12Slice = useSelector((state) => state.games12Slice);
  // const slice12Games = allGames.slice(12, 24);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(topPriceGame());
  }, [dispatch]);

  //estados locales
  return (
    <div>
      <FilterCombination />
      <CarouselButtons game={games12Slice} category={false} />
    </div>
  );
}

export default CarosuelSectionPrice;
