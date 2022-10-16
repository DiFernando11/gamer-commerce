import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterGenres } from "../../redux/actions";
import CarrouselMainCategory from "../carouselMainCategory";
import FilterCombination from "../filterCombination";
import Paginado from "../paginate";
//import styles from "./index.module.css";

function Genres() {
  const images = [
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://i.ytimg.com/vi/2S4O8Ea6M9Y/maxresdefault.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
    "https://i.ytimg.com/vi/LMCt-gSvEqU/maxresdefault.jpg",
  ];
  const { id } = useParams();
  const genreFilters = useSelector((state) => state.genreFilters);
  console.log(genreFilters);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterGenres(id));
  },[]);
  return (
    <main>
      <CarrouselMainCategory />
      <FilterCombination />
      <Paginado videoGames={genreFilters} />
    </main>
  );
}

export default Genres;
