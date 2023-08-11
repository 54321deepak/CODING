//routin
const express =require("express")

const app = new express()

const port=3000;

app.get("/",(req,res)=>{
    res.send("ok")
})

app.get("/about",(req,res)=>{
    res.status(200).send("not ok")
})

app.get("/contact",(req,res)=>{
    res.send("not ok ok ok 11111")
})


app.listen(port,()=>{
    console.log("the the")
})