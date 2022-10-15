import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCombination } from "../../redux/actions";
import styles from "./index.module.css";

function FilterCombination() {
  //estados locales
  const [selectPropsToFilter, setSelectPropsToFilter] = useState({
    genre: "All",
    year: "All",
    price: 1200,
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
    dispatch(
      filterCombination({
        ...selectPropsToFilter,
        [e.target.name]: e.target.value,
      })
    );
  };
  // obtener todos los años desde 1900 hasta la actualidad, metodo harcodeado hasta obtener rutas del back
  const yearsAll = [];
  var dateSelect = new Date();
  var yearSelect = dateSelect.getFullYear();
  for (var i = yearSelect; i >= 1900; i--) {
    yearsAll.push(i);
  }

  return (
    <div className={styles.containerFilterCombinationForm}>
      <div className={styles.containerRangePrice}>
        <span className={styles.rangePrice}>
          Juegos menores a {selectPropsToFilter.price}$
        </span>
        <input
          value={selectPropsToFilter.price}
          name="price"
          type="range"
          className="form-range"
          max={1200}
          id="customRange1"
          onChange={handleSelectPropsTofilter}
        ></input>
      </div>

      <label htmlFor="Genres">
        Genres
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          id="Genres"
          name="genre"
          onChange={handleSelectPropsTofilter}
        >
          <option value={"All"}>Todos</option>
          <option value="Infantil">Infantil</option>
          <option value="Musica">Musica</option>
          <option value="Romantica">Romantica</option>
          <option value="Accion">Accion</option>
        </select>
      </label>
      <label htmlFor="year">
        Año
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          id="year"
          name="year"
          onChange={handleSelectPropsTofilter}
        >
          <option value={"All"}>Todos</option>
          {yearsAll.map((year) => (
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
