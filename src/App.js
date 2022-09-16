const express= require("express");
require("./dataB/conn");
const App = express();
const getrout=require("./RoutingData/getmethod")
const port = process.env.PORT || 3000;
const Student= require("./models/students");
App.use(express.json());
App.use(getrout);


// create a new student

App.post("/students",async(req,res)=>{
  try{
    const data=req.body
    console.log(data);
    const user =await new Student(data);
    const val=await user.save();
    res.json(val)
  } 
  catch(e){
    res.send(e);
  }
})


// get method handle


// App.get("/students",async(req,res)=>{
//     try{
//         const getD=req.body;
//         console.log(getD);
//         const std = await Student.find(getD);
//         res.send(std);
//     }catch(e){
//         res.send(e);
//     }
// })


// delete the students by id 

App.delete("/students/:id",async(req, res)=>{
    try{
        const id = req.params.id;
       const delstd= await Student.findByIdAndDelete(id);
       if(!id){
        return res.send();
       }
       res.send(delstd);
    }catch(e){
        res.send(e);
    }
})


// update the student table (patch/put)

App.patch("/students/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
     const Updatestd = await Student.findByIdAndUpdate(_id, req.body)
        res.send(Updatestd);
    }catch(e){
        res.send(e)
    }
})

App.listen(port , ()=>{
    console.log(`connection is setup at ${port}`);
})



    module.exports=App;

  