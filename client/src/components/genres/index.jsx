import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterGenres } from "../../redux/actions";
import CarrouselMainCategory from "../carouselMainCategory";
import FilterCombination from "../filterCombination";
import Paginado from "../paginate";
//import styles from "./index.module.css";


function Genres() {
  const { id } = useParams();
  const genreFilters = useSelector((state) => state.genreFilters);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterGenres(id));
  },[dispatch, id]);
  return (
    <main>
      <CarrouselMainCategory />
      <FilterCombination />
      <Paginado videoGames={genreFilters} />
    </main>
  );
}

export default Genres;
