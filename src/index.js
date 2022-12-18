const express=require("express");
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverconfig");
const ApiRoutes=require("./routes/index")
//const {city}=require("./models/index");
const setupandstartservice=async()=>{
    const app=express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
   // const PORT=3000;
    app.listen(PORT,async()=>{
        console.log(`server starting at ${PORT}`);
        //console.log(city);
       // console.log(process.env);
    })
}
setupandstartservice();