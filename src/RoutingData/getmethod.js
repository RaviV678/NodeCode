// const Student= require("./models/students");
const express= require("express");
const router = new express.Router();
const Student=require("../models/students")


// router.get("",(req,res)=>{
//     res.send("hello");
// })

router.get("/students",async(req,res)=>{
    try{
        const getD=req.body;
        console.log(getD);
        const std = await Student.find(getD);
        res.send(std);
    }catch(e){
        res.send(e);
    }
})
module.exports= router;