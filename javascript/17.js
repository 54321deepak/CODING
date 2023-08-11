//  video dekh lena
//node routin
//127.0.01 server address
//3000 were to listen
const http =require("http")

 const server = http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url== "/"){
res.end("ok")
    }else if(req.url =="/contact") {
res.write("not ok")
        res.end()
    } else{
        res.writeHead(404,{"content-type" : "text/html"})
res.end("   <h1>404 error</h1>")        
    }
 })
server.listen(3000,"127.0.0.1", ()=>{
console.log("it is me")
 })