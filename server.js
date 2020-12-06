const express=require("express");


const app=express();

app.get("/",(req,res)=>{
    res.send("Day la trang chu.oke")
})

app.get("/test",(req,res)=>{
    res.send("Day la trang test.oke")
})


app.listen(5000,()=>{
    console.log("Port 5000")
})