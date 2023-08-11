
//publish dynamic website use templete engine
//when use rtemplate engine use render

const path = require("path")

const express = require("express")

const app = new express()

const s =  path.join(__dirname,'try')

console.log(s);
app.set("view engine","hbs")
app.use(express.static(s))

app.get("/", (req, res) => {
    res.render("index",{
        i:"ff"
    });
})

app.get("/about", (req, res) => {
    res.send("not ok")
})

app.listen(8000, () => {
    console.log("the the")
})