const express = require("express")

const app = new express()

const port = 3000;
// res.send use only one only one output so we use res.write 
app.get("/", (req, res) => {
    res.write("<h1>ok</h1>")
    res.write("<h1>ok</h1>")
    res.send();
})

app.get("/about", (req, res) => {
    res.status(200).send("not ok")
})

app.get("/contact", (req, res) => {
    res.send("not ok ok")
})

// app.get("/temp", (req, res) => {        //convert object into son
//     res.send([{
//         id: 1,
//         name: "about",
//     },
//     {
//         id: 1,
//         name: "about",
//     },
//     {
//         id: 1,
//         name: "about",
//     },
// ]);
// });

app.get("/temp", (req, res) => {
    res.json([{
        id: 1,
        name: "about",
    },
    {
        id: 1,
        name: "about",
    },
    {
        id: 1,
        name: "about",
    },
]);
});


app.listen(port, () => {
    console.log("the the")
})