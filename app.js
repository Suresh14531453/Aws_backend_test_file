const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.send("hit to all")
})
app.listen(9090,()=>{
    console.log("app listening at 9090")
})