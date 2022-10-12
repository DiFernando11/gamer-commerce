const axios = require("axios");
const { game } = require("../../db.js");
const {
    APIKEY
  } = process.env;
 const dataJson = require('./data.json')


const dataBaseLoader = async () => {
  let arrayGames=JSON.parse(dataJson)
  let counted = await game.count();
  if (counted < 1) {
   

    const arrData = arrayGames.map((el) => {
      let year=Number(el.released.slice(0,4))
      let value=60
      if(year<2005) value=10;
      else if(year<2007) value=20;
      else if(year<2010) value=30;
      else if(year<2015) value=40;
      else if(year<2021) value=50;

        return {
          id: el.id,
          name: el.name,
          description: el.description_raw,
          released: el.released,
          image: el.background_image,
          rating: el.rating,
          website: el.website,
          developers: el.developers,
          requirements_min: el.requirements.minimum,
          requirements_max: el.requirements.recommended,
          tags: el.tags,
          price: value
         
        };
      });
 
      const saver = () => {
        arrData.map((el) => {
          game.findOrCreate({
            where: {
              id: el.id,
            },
            defaults: {
              name: el.name,
              description: el.description,
              released: el.released,
              image: el.image,
              rating: el.rating,
              website: el.website,
              developers: el.developers,
              requirements_min: el.requirements_min,
              requirements_max: el.requirements_max,
              tags: el.tags,
              price: el.price
              
            },
          }).catch((err) => {
            console.log(err);
          });
        });
      };
    
      console.log("Db Created");

     
  return saver();

}
};

module.exports = {
  dataBaseLoader,
};
