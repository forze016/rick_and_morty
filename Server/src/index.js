const http = require("http");
const data = require("./utils/data.js");



 const server = http
 .createServer((req, res) => {
  
    res.setHeader("Access-Control-Allow-Origin", "*");
   
    if (req.url.includes("/rickandmorty/character")) {
    
        const id = req.url.split("/").pop();
    
        const character = data.find((character) => character.id === parseInt(id));
    
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(character));
  }
});
 server.listen(3001, () => {
  console.log("Servidor escuchando en el puerto 3001");
});