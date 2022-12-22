const express=require("express");
const bodyParser=require("body-parser");
const {PORT}=require("./config/serverconfig");
const ApiRoutes=require("./routes/index")
const db = require('./models/index');
const {City,Airport}=require("./models/index");
const setupandstartservice=async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);

   // const PORT=3000;
    app.listen(PORT, async()=>{
        console.log(`server starting at ${PORT}`);
        //console.log(city);
     // console.log(process.env);
       if(process.env.SYNC_DB) {
        db.sequelize.sync({alter: true});
   }
    //    const city=await City.findOne({
    //     where:{
    //         id:2 }
    //    });
    //    const airports=await city.getAirports();
    //    await city.addAirports()
    //    console.log(city,airports);
    // await Airplane.create({
    //     modelNumber:'bobamdier cj';
    // });   
    });
}
setupandstartservice();