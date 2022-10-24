import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  filterCombinationGenres,
  filterGenres,
} from "../../redux/actions";
import CarrouselMainCategory from "../carouselMainCategory";
import FilterCombination from "../filterCombination";
import Paginado from "../paginate";
import styles from "./index.module.css";

function Genres() {
  const { id } = useParams();
  const genreFilters = useSelector((state) => state.genreFilters);
  const [resetFiltersinput, setResetFiltersinput] = useState(false);
  // const slice12Games = allGames.slice(12, 24);
  const filterResetGames = () => {
    dispatch(
      filterCombinationGenres({
        genre: "All",
        year: "All",
        price: 70,
      })
    );
    setResetFiltersinput(!resetFiltersinput);
  };
  let dispatch = useDispatch();

  // console.log(genreFilters);
  useEffect(() => {
    dispatch(filterGenres(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);
  return (
    <main>
      <CarrouselMainCategory />
      <FilterCombination genres={true} resetFiltersinput={resetFiltersinput} />
      {genreFilters.length ? (
        <Paginado videoGames={genreFilters} />
      ) : (
        <div className={styles.containerNotExistedGameCombination}>
          <button onClick={filterResetGames}>Ver mas</button>
        </div>
      )}
    </main>
  );
}

export default Genres;
