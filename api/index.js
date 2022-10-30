const server = require('./src/app.js');
const { conn, Game, Genre,Comment, Review } = require('./src/db.js');
const {dataBaseLoader,genreLoader}=require("./src/utils/dbloader")
const { PORT } = process.env;
const PUERTO= PORT || 3001;

// Syncing all the models at once.
conn.sync({ alter: true }).then(async() => {
    server.listen(PUERTO, () => {
  console.log(`%s listening at ${PUERTO} ` ); // eslint-disable-line no-console
});
Genre.count().then(el=>{ 
  el>0?console.log("Genre Already Loaded"):genreLoader()
})

Game.count().then(el=>{ 
  el>0?console.log("Games Already Loaded"):dataBaseLoader()
})

});
