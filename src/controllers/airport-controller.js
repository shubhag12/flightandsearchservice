const {AirportService}=require('../services/index');
const airportService=new AirportService();
const create=async(req,res) => {
    try {
        //console.log('inside controller')
        const city=await airportService.create(req.body);

        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created a city",
            err:{}
        }); 
    } catch (error) {
        console.log("error at controllers city controllers.js")
        return res.status(201).json({
            data:{},
            success:false,
            message:"not able to create a city",
            err:error
        }); 
    }
}
module.exports={
    create,
 
}

