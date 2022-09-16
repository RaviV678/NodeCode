const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
       
    } ,
    
    email:{
            type:String,
        },
    phone:{
            type:Number, 
        },
    address:{
            type:String,  
        }
})
const Student = new mongoose.model('Student',studentSchema);
module.exports = Student;