import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCombination,
  filterCombinationGenres,
} from "../../redux/actions";
import styles from "./index.module.css";

function FilterCombination({ genres = false, resetFiltersinput = false }) {
  //estados locales
  const Genre = useSelector((state) => state.Genre);
  const copyGenre = useSelector((state) => state.copyGenre);
  const yearsOption = copyGenre.map((game) => game.released);
  const year = yearsOption.map((year) => year.split("-", 1)).flat();
  const dataArr = new Set(year);
  let resultYearGenre = [...dataArr].sort((a, b) => b - a);

  const [selectPropsToFilter, setSelectPropsToFilter] = useState({
    genre: "All",
    year: "All",
    price: 70,
  });
  //hooks
  const dispatch = useDispatch();
  //handlers
  //escucha los cambios de las opciones de filtrados y filtra de manera combinada
  const handleSelectPropsTofilter = (e) => {
    setSelectPropsToFilter({
      ...selectPropsToFilter,
      [e.target.name]: e.target.value,
    });
    if (!genres) {
      dispatch(
        filterCombination({
          ...selectPropsToFilter,
          [e.target.name]: e.target.value,
        })
      );
    } else {
      dispatch(
        filterCombinationGenres({
          ...selectPropsToFilter,
          [e.target.name]: e.target.value,
        })
      );
    }
  };
  const handleResetInputFilter = () => {
    setSelectPropsToFilter({
      genre: "All",
      year: "All",
      price: 70,
    });
  };

  useEffect(() => {
    handleResetInputFilter();
  }, [resetFiltersinput]);

  // obtener todos los años desde 1900 hasta la actualidad, metodo harcodeado hasta obtener rutas del back
  const yearsAll = [];
  var dateSelect = new Date();
  var yearSelect = dateSelect.getFullYear();
  for (var i = yearSelect; i >= 1993; i--) {
    yearsAll.push(i);
  }

  return (
    <div className={styles.containerFilterCombinationForm}>
      <div className={styles.containerRangePrice}>
        <span className={styles.rangePrice}>
          less than {selectPropsToFilter.price}$
        </span>
        <input
          value={selectPropsToFilter.price}
          name="price"
          type="range"
          className="form-range"
          max={70}
          min={11}
          id="customRange1"
          onChange={handleSelectPropsTofilter}
        ></input>
      </div>
      {!genres && (
        <label htmlFor="Genres">
          Genres
          <select
            className="form-select form-select-sm"
            value={selectPropsToFilter.genre}
            aria-label=".form-select-sm example"
            id="Genres"
            name="genre"
            onChange={handleSelectPropsTofilter}
          >
            <option value={"All"}>All</option>
            {Genre.length
              ? Genre.map((genre, index) => (
                  <option key={index} value={genre.name}>
                    {genre.name}
                  </option>
                ))
              : null}
          </select>
        </label>
      )}

      <label htmlFor="year">
        year
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          id="year"
          name="year"
          value={selectPropsToFilter.year}
          onChange={handleSelectPropsTofilter}
        >
          <option value={"All"}>All</option>
          {genres
            ? resultYearGenre.length
              ? resultYearGenre.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))
              : null
            : yearsAll.length &&
              yearsAll.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
        </select>
      </label>
    </div>
  );
}

export default FilterCombination;
