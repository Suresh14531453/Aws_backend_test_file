const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("its working properly")
})
app.listen(8080,()=>{
    console.log("server listening at 8080")
})