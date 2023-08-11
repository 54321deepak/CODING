//express router
const express = require("express");
const router = express.Router();
const Student = require("../models/students")

router.post("/", (req, res) => {        //post is postmon method
    res.send("ok")
})

router.post("/student", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(200).send(createUser)
    }
    catch (e) {
        res.status(404).send(e)
    }
})

//read
router.get("/student", async (req, res) => {
    try {
        const studentsdata = await Student.find()
        res.status(201).send(studentsdata)
    }
    catch (e) {
        res.status(404).send(e)
    }
})


router.get("/student/:id", async (req, res) => {
    try {
        console.log(req.params);
        const _id = req.params.id;
        const studentData = await Student.findById(_id)
        console.log(studentData)
        if (!studentData) {
            res.status(404).send()
        }
        else {
            res.send(studentData)
        }
    }
    catch (e) {
        res.status(404).send(e)
    }
})


//update

router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(updateStudents)
    }
    catch (e) {
        res.status(500).send(e)
    }
})

// delete

router.delete("/student/:id", async (req, res) => {
    try {

        const deleteStudents = await Student.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            res.status(400).send()
        } else {
            res.send(deleteStudents)
        }
    }
    catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router