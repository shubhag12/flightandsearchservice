const express=require("express");
const {PORT}=require("./config/serverconfig")
const setupandstartservice=async()=>{
    const app=express();
   // const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`server starting at ${PORT}`);
       // console.log(process.env);
    })
}
setupandstartservice();