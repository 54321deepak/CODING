const express = require("express");
const app = new express();
const cors = require("cors")
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/myLoginRegisterDB")
    .then(() => console.log("connection successfull..."))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(cors())

const userSchema = new mongoose.Schema({
    name: "string",
    email: "string",
    password: "string",
})

const User = new mongoose.model("user", userSchema)

app.post("/login", async (req, res) => {

    try {
        const {email, password } = req.body;
        const user = await User.findOne({ email: email })
        if(user){
            if(password == user.password){
                res.send({ message: "login user", user:user })
            }else{
                res.send({ message: "password  not match" })
            }
        }
        else{res.send({ message: "not exist" })}
    }
    catch (e) {
        res.status(404).send(e)
    }
})

app.post("/register", async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const user = await User.findOne({ email: email })
            if (user) {
                res.send({ message: "already exist" })
            } else {
                const user = new User({
                    name,
                    email,
                    password,   
                })
                user.save()
                res.send( {message : "successful Register"})
            }
    }catch(e){
        console.log(e);
    }
})

app.listen(8000, () => {
    console.log(`success 8000`)
})