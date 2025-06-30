///imported the json server

const jsonserver = require('json-server')

//5) install cors (npm i cors) and import

const cors = require('cors')

//2) create a server using json-server

const server = jsonserver.create()

//3) setting up a middelware

const middelware= jsonserver.defaults()

//4) routes

const routes = jsonserver.router('db.json')

//6)implmenting use

server.use(cors())
server.use(middelware)
server.use(routes)

//7) create port

// 3000 or othe port

const PORT = process.env.PORT || 3000

//8) server started

server.listen(PORT,()=>{
    console.log("Server started" +PORT);
    })
    //starting command 
    // npx json-server db.json


