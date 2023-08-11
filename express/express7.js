//change views folder name
const path = require("path")

const express = require("express")

const app = new express()

const s =  path.join(__dirname,'try')
const template =  path.join(__dirname,'template')
console.log(s);
app.set("view engine","hbs")
app.set("views" , template)
app.use(express.static(s))

app.get("/", (req, res) => {
    res.render("index",{
        i:"ff"
    });
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(8000, () => {
    console.log("the the")
})