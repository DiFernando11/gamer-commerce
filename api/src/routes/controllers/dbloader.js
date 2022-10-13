const axios = require("axios");
const { Game } = require("../../db.js");
const json = require("./data.json")
const { APIKEY } = process.env;



const dataBaseLoader = async () => {
  let arrId = JSON.parse(json)
  
  

  

  for (let i = 0; i <arrId.length; i++) {
    console.log(i)
    let response = await axios.get(`https://api.rawg.io/api/games/${arrId[i]}?key=${APIKEY}`);
    let el = response.data
    let year =Number(el.released.slice(0, 4))
    let value = 60
    if (year < 2005) value = 10;
    else if (year < 2007) value = 20;
    else if (year < 2010) value = 30;
    else if (year < 2015) value = 40;
    else if (year < 2021) value = 50;
    let arrayPlatform = el.platforms.filter((el) => el.platform.name == "PC");
    Game.findOrCreate({
      where: {
        id: el.id,
      },
      defaults: {
        name: el.name,
        description: el.description_raw,
        released: el.released,
        image: el.background_image,
        rating: el.rating,
        website: el.website,
        developers: el.developers?.map((d) => d.name),
        requirements_min: arrayPlatform[0].requirements.minimum,
        requirements_rec: arrayPlatform[0].requirements.recommended,
        tags: el.tags?.map((d) => d.name),
        price: value

      },
    }).catch((err) => {
      console.log(err);
    });
 
};

console.log("Db Created");

return
};

module.exports = {
  dataBaseLoader,
};

