import React from "react";
import CarouselButtons from "../carouselButtons";
import {useDispatch, useSelector} from "react-redux";
import { useEffect} from "react";
import { getGenres } from "../../redux/actions";

function CarouselGenres() {
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.Genre);
/*   const imageVideoGame = [
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=latam",
      name: "carrera",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/fighting_martial_arts?cc=us&l=latam",
      name: "pelea",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/exploration_open_world?cc=us&l=latam",
      name: "mundo abierto",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=latam",
      name: "strategia",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=latam",
      name: "rpg",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/survival?cc=us&l=latam",
      name: "supervivencia",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=latam",
      name: "anime",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/sports?cc=us&l=latam",
      name: "deportes",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/simulation?cc=us&l=latam",
      name: "simulaciones",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=latam",
      name: "rol",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/adventure?cc=us&l=latam",
      name: "aventura",
    },
    {
      image: "https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=latam",
      name: "terror",
    },
  ]; */
  
  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch]);

  return (
    <div>
      <CarouselButtons image={genre} category={true} />
    </div>
  );
}

export default CarouselGenres;
