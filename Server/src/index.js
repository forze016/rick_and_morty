/* El código anterior crea un servidor HTTP que escucha en el puerto 3001.
Cuando se recibe una solicitud, el servidor verifica
si la URL incluye "/rickandmorty/character". Si es así, 
extrae el ID del personaje de la URL y busca en el archivo de datos el personaje
correspondiente a ese ID. Luego, envía una respuesta con el personaje encontrado
en formato JSON. 

 Explicación paso a paso del código:  */

//Se importa el módulo "http"y el archivo "data.js" que contiene los datos de los personajes.
const http = require("http");
const data = require("./utils/data.js");


/*Se crea un servidor HTTP utilizando el método "createServer" del módulo "http".
Dentro de la función de callback, que se ejecuta cada vez que se recibe una solicitud,
se definen las acciones a realizar. */ 
 const server = http
 .createServer((req, res) => {
/*Se establece el encabezado "Access-Control-Allow-Origin" en la respuesta para permitir el acceso desde cualquier origen.  */
    res.setHeader("Access-Control-Allow-Origin", "*");
//Se verifica si la URL de la solicitud incluye "/rickandmorty/character".
    if (req.url.includes("/rickandmorty/character")) {
//Si la URL incluye "/rickandmorty/character", se extrae el ID del personaje de la URL utilizando el método "split" y "pop".    
        const id = req.url.split("/").pop();
//Se busca en el archivo de datos el personaje que tenga el mismo ID utilizando el método "find" y se asigna a la variable "character".     
        const character = data.find((character) => character.id === parseInt(id));
//Se establece el encabezado "Content-Type" en la respuesta para indicar que el contenido es de tipo JSON.     
        res.setHeader("Content-Type", "application/json");
//Se envía la respuesta con el personaje encontrado en formato JSON utilizando el método "end" y "JSON.stringify".         
        res.end(JSON.stringify(character));
  }
});

//Se llama al método "listen" del servidor para que empiece a escuchar en el puerto 3001. 
 server.listen(3001, () => {
//Se muestra en la consola el mensaje "Servidor escuchando en el puerto 3001".  
  console.log("Servidor escuchando en el puerto 3001");
});