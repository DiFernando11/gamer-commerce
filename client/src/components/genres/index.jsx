import React from "react";
import CarrouselMainCategory from "../carouselMainCategory";
import FilterCombination from "../filterCombination";
import Paginado from "../paginate";

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
  return (
    <main>
      <CarrouselMainCategory />
      <FilterCombination />
      <Paginado videoGames={images} />
    </main>
  );
}

export default Genres;
