//create api
const http =require("http")
const fs=require("fs")

const data =fs.readFileSync("19.json","utf-8")
   const objdata = JSON.parse(data)

const server = http.createServer((req,res)=>{
   // console.log(req.url)
   if(req.url== "/"){
res.end("ok")
   }else if(req.url =="/contact") {
       res.end("not ok")
   }else if(req.url =="/userapi") {
      // fs.readFile("19.json","utf-8",(err,data)=>{
         // console.log(data);
         // const objdata = JSON.parse(data)
         // res.end(data);
         res.writeHead(200,{"content-type" : "application/json"})

         res.end(objdata[0].name)
      //  })
  
  }
    else{
       res.writeHead(404,{"content-type" : "text/html"})
res.end("   <h1>404 error</h1>")        
   }
})
server.listen(3000,"127.0.0.1", ()=>{
console.log("it is me")
})