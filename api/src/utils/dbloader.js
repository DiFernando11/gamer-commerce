const axios = require("axios");
const { Game, Genre } = require("../db.js");
const json = require("./data.json")
const { APIKEY } = process.env;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const dataBaseLoader = async () => {
  let arrId = JSON.parse(json)
  
  for (let i = 0; i <arrId.length; i++) {
    console.log(i)
    let response = await axios.get(`https://api.rawg.io/api/games/${arrId[i]}?key=${APIKEY}`);
    let el = response.data
    let year =Number(el.released.slice(0, 4))
    let value = 60
    if (year < 2005) value = Math.round(getRandomArbitrary(1, 10));
    else if (year < 2007) value = Math.round(getRandomArbitrary(10, 20));
    else if (year < 2010) value = Math.round(getRandomArbitrary(15, 30));
    else if (year < 2015) value = Math.round(getRandomArbitrary(20, 40));
    else if (year < 2021) value = Math.round(getRandomArbitrary(40, 70));
    let arrayPlatform = el.platforms.filter((el) => el.platform.name == "PC");
    const [newGame, created]= await Game.findOrCreate({
      where: {
        id: el.id,
      },
      defaults: {
        name: el.name,
        description: el.description_raw,
        released: el.released,
        image: el.background_image,
        image2: el.background_image_additional,
        rating: el.rating,
        website: el.website,
        developers: el.developers?.map((d) => d.name),
        requirements_min: arrayPlatform[0].requirements.minimum,
        requirements_rec: arrayPlatform[0].requirements.recommended,
        tags: el.tags?.map((d) => d.name),
        price: value

      },
    })
    
    el.genres.forEach(async (index) => {
     
      let genre = await Genre.findOne({
        where: {
          id: index.id,
        },
      });

      await genre.addGame(newGame)
    });
 
};

console.log("Game Db Created");

return
};


const genreLoader = async () => {
    
    let response = await axios.get(`https://run.mocky.io/v3/0f09dddd-4454-4ddc-8f4f-0a3c506bceeb`);
    let arrData = response.data
arrData.map(async(el)=>{
   await Genre.findOrCreate({
      where: {
        id: el.id,
      },
      defaults: {
        name: el.name,
        image: el.image,
      },
    }).catch((err) => {
      console.log(err);
    });

  })
 


console.log("Genre Db Created");

return
};

module.exports = {
  dataBaseLoader,
  genreLoader
};

