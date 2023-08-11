//create own server
const  http=require("http")
 const server=http.createServer((req,res)=>{
   
    res.end("ok")
 })

 server.listen(8000,"127.0.0.1",()=>{
    console.log("listen to me")
 })  



