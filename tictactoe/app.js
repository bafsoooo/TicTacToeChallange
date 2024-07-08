//setup server
const express = require("express")
const app = express() // Corrected typo: exprerr() to express()

//path for index.html
const path = require("path")
const http = require("http")
const socketIO = require("socket.io") // Corrected require statement

const server = http.createServer(app)   

const io = socketIO(server) // Corrected instantiation of socket.io server
app.use(express.static(path.resolve("public")))

app.get("/public",(req,res)=>{
    return res.sendFile(path.resolve("public/index.html"))
})

//listen to the server

server.listen(5500,()=>{ // Corrected port number to match the console log message
    console.log("server is running on port 5500") // Corrected port in log message to match the actual listening port
})