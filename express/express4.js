//easy publis static website

const path = require("path")

const express = require("express")

const app = new express()
//__dirname//__filename= use kar sakte ai instead of d:/codin/express/ 
const s =  path.join(__dirname,'my')
console.log(__dirname);
console.log(s);

app.use(express.static(s))



app.get("/about", (req, res) => {
    res.send("not ok")
})

app.listen(8000, () => {
    console.log("the the")
})