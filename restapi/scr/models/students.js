const mongoose = require("mongoose")
 const validator = require("validator")

 const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        minlength:3, 
    },
    email: {
        type: String,
        required: true, 
        unique:[true,"email is not present"],
        validate(value) {
        if (!validator.isEmail(value)){
        throw new Error("email is invalid")
    }}
    },
    phone:{ type:Number,
    unique:true,
    min:10,
    required: true, 
    },
    
   address: {
    type: String,
    required: true,      
    }
})

const Student = new mongoose.model("student", studentSchema)

module.exports=Student;
