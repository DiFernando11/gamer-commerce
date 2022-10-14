import React, { useState } from "react";
import CarouselButtons from "../carouselButtons";
import { useDispatch, useSelector } from "react-redux";
import { filterCombination } from "../../redux/actions";
function FilterCombination() {
  const videoGames = useSelector((state) => state.videoGames);
  //estados locales
  const [selectPropsToFilter, setSelectPropsToFilter] = useState({
    price: 2000,
    genre: "All",
    year: "All",
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
    <div className="containerFilterCombinationForm">
      <label htmlFor="Price">
        Less than
        <div className="select">
          <select id="Price" name="price" onChange={handleSelectPropsTofilter}>
            <option value={2000}>All</option>
            <option value={1000}>1000$</option>
            <option value={500}>500$</option>
            <option value={100}>100$</option>
          </select>
        </div>
      </label>
      <label htmlFor="Genres">
        Genres
        <div className="select">
          <select id="Genres" name="genre" onChange={handleSelectPropsTofilter}>
            <option value="All">All</option>
            <option value="Infantil">Infantil</option>
            <option value="Musica">Musica</option>
            <option value="Romantica">Romantica</option>
            <option value="Accion">Accion</option>
          </select>
        </div>
      </label>
      <label htmlFor="year">
        year
        <div className="select">
          <select id="year" name="year" onChange={handleSelectPropsTofilter}>
            <option value="All">All</option>
            {yearsAll.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </label>
    </div>
  );
}

export default FilterCombination;
