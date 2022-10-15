import React from "react";
import CarouselGenres from "../carouselGenres";
import CarrouselPunctuation from "../carouselPunctuation";
import CarrouselRecommended from "../carouselRecommended";
import CarosuelSectionPrice from "../carouselSectionPrice";
import Header from "../header";
import LiveVideoGame from "../liveVideoGame";

function Home() {
  const videoGames = [
    {
      image: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "GTA 5",
      price: 200,
      genre: "Musica",
    },
    {
      image:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/juegos-lucha.jpg?itok=wMiWNv0G",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
    },
  ];
  return (
    <main>
      <Header />
      <CarrouselRecommended videoGames={videoGames} category={false} />
      <CarosuelSectionPrice />
      <CarouselGenres />
      <CarrouselPunctuation />
      <LiveVideoGame />
    </main>
  );
}

export default Home;
