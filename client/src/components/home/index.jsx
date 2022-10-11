import React from "react";
import CarouselButtons from "../carouselButtons";

function Home() {
  const imageVideoGame = [
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
    },
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "Smash Bros",
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/mejores-juegos-super-mario.jpg?itok=LWsT5Tom",
      name: "Mario Bros",
    },
  ];

  return (
    <main>
      <CarouselButtons image={imageVideoGame} />
    </main>
  );
}

export default Home;
