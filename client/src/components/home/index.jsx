import React from "react";
import CarouselGenres from "../carouselGenres";
import CarrouselPunctuation from "../carouselPunctuation";
import CarrouselRecommended from "../carouselRecommended";
import CarosuelSectionPrice from "../carouselSectionPrice";


import Header from "../header";

import LiveVideoGame from "../liveVideoGame";
import NavBar from "../nav-bar";




function Home() {
  const videoGames = [
    {
      img: "https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
      year: 2002,
      image: [
        "https://as01.epimg.net/meristation/imagenes/2020/05/15/trucos/1589544811_331717_1589544882_noticia_normal.jpg",
        "http://culturageek.com.ar/wp-content/uploads/2020/05/Culturageek.com_.ar-GTA5-Gratis-1-scaled.jpg",
        "https://cdn.andro4all.com/andro4all/2022/03/GTA-V.jpg",
        "https://compass-ssl.xbox.com/assets/a0/4f/a04f2744-74d9-4668-8263-e0261fbea869.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg",
      ],
    },
    {
      img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-smash-bros-ultimate-switch/hero",
      name: "GTA 5",
      price: 200,
      genre: "Musica",
      year: 2002,
      image: [
        "https://media.vandal.net/master/58489/super-smash-bros-ultimate-201811714385186_33.jpg",
        "https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_supersmashbrosultimate_1/CI_NSwitch_SmashBrosUltimate_FightersRow_2lines_image950w.jpg",
        "https://areajugones.sport.es/wp-content/uploads/2019/11/Super-Smash-Bros-Ultimate.jpg",
        "https://i.blogs.es/a52207/smashbros0-1/450_1000.jpg",
      ],
    },
    {
      img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/juegos-lucha.jpg?itok=wMiWNv0G",
      name: "GTA 5",
      price: 100,
      genre: "Musica",
      year: 2002,
      image: [
        "https://as01.epimg.net/meristation/imagenes/2020/05/15/trucos/1589544811_331717_1589544882_noticia_normal.jpg",
        "https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_supersmashbrosultimate_1/CI_NSwitch_SmashBrosUltimate_FightersRow_2lines_image950w.jpg",
        "https://areajugones.sport.es/wp-content/uploads/2019/11/Super-Smash-Bros-Ultimate.jpg",
        "https://i.blogs.es/a52207/smashbros0-1/450_1000.jpg",
      ],
    },
  ];
  return (
    <main>

      <CarrouselRecommended />

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
