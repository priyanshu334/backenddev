// creating a server

//first step we require a http module 
const http = require('http');
//re
const server=http.createServer((req,res)=>{
    console.log("request has been made from browser to server")

});
//the two agruments of listen are port number and callback function means whre to show
server.listen(3000,'localhost',()=>{
    console.log("server is listning on port 3000")
})