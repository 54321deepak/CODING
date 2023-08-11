//stream and buffer
const fs = require("fs");
const http = require("http")

const server = http.createServer();

server.on('request',(req,res)=>{ 
//     fs.readFile("21 input.txt", (err,data)=>{
//         console.log(err)
//         res.end(data.toString());
//     })
 const rstream = fs.ReadStream("21 input.txt")

rstream.on('data',(cdata)=>{
    res.write(cdata)
})

rstream.on('end',()=>{
    res.end()
})

rstream.on('error',(err)=>{
    console.log(err); 
    res.end("file not found")
})
})
server.listen(3000,"127.0.0.1");

