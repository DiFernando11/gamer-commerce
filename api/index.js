const server = require('./src/app.js');
const { conn, Game, Genre } = require('./src/db.js');
const {dataBaseLoader,genreLoader}=require("./src/routes/controllers/dbloader.js")

// Syncing all the models at once.
conn.sync({ alter: true }).then(async() => {

server.listen(process.env.PORT, () => {
  console.log('%s listening at 3001'); // eslint-disable-line no-console
});

Genre.count().then(el=>{ 
  el>0?console.log("Genre Already Loaded"):genreLoader()
})

Game.count().then(el=>{ 
  el>0?console.log("Games Already Loaded"):dataBaseLoader()
})


});
