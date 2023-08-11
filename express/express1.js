const express =require("express")

const app = new express()

app.get("/",(req,res)=>{
    res.send("ok")
})

app.get("/about",(req,res)=>{
    res.send("not ok")
})


app.listen(3000,()=>{
    console.log("the the")
})