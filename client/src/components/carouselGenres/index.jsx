import React from "react";
import CarouselButtons from "../carouselButtons";

function CarouselGenres() {
  const imageVideoGame = [
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/racing?cc=us&l=latam",
      category: "carrera",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/fighting_martial_arts?cc=us&l=latam",
      category: "pelea",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/exploration_open_world?cc=us&l=latam",
      category: "mundo abierto",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/strategy?cc=us&l=latam",
      category: "strategia",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=latam",
      category: "rpg",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/survival?cc=us&l=latam",
      category: "supervivencia",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/anime?cc=us&l=latam",
      category: "anime",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/sports?cc=us&l=latam",
      category: "deportes",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/simulation?cc=us&l=latam",
      category: "simulaciones",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/rpg?cc=us&l=latam",
      category: "rol",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/adventure?cc=us&l=latam",
      category: "aventura",
    },
    {
      img: "https://store.steampowered.com/categories/homepageimage/category/horror?cc=us&l=latam",
      category: "terror",
    },
  ];
  return (
    <div>
      <CarouselButtons image={imageVideoGame} category={true} />
    </div>
  );
}

export default CarouselGenres;
