import React, { useEffect, useState } from "react";
import CarouselButtons from "../carouselButtons";
import FilterCombination from "../filterCombination";
import { useDispatch, useSelector } from "react-redux";
import { filterCombination, topPriceGame } from "../../redux/actions";
import styles from "./index.module.css";

function CarosuelSectionPrice() {
  //estados globales
  const games12Slice = useSelector((state) => state.games12Slice);
  const [resetFiltersinput, setResetFiltersinput] = useState(false);
  // const slice12Games = allGames.slice(12, 24);
  const filterResetGames = () => {
    dispatch(
      filterCombination({
        genre: "All",
        year: "All",
        price: 70,
      })
    );
    setResetFiltersinput(!resetFiltersinput);
  };
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(topPriceGame());
  }, [dispatch]);

  //estados locales
  return (
    <div>
      <FilterCombination resetFiltersinput={resetFiltersinput} />
      {games12Slice.length ? (
        <CarouselButtons game={games12Slice} category={false} />
      ) : (
        <div className={styles.containerNotExistedGameCombination}>
          <button onClick={filterResetGames}>Ver mas</button>
        </div>
      )}
    </div>
  );
}

export default CarosuelSectionPrice;
