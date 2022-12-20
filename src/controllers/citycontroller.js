const {CityService}=require('../services/index');
const cityService=new CityService();

const create=async(req,res) => {
    try {
        //console.log('inside controller')
        const city=await cityService.createCity(req.body);

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
const update=async (req,res)=>{
    try {
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully  updated a city",
            err:{}
        }); 
    } catch (error) {
        console.log("error at controllers city controllers.js")
        return res.status(201).json({
            data:{},
            success:false,
            message:"not able to update  a city",
            err:error
        }); 
    }
}
const destroy=async (req,res)=>{
    try {
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully deleted a city",
            err:{}
        }); 
        
    } catch (error) {
        console.log("error at controllers city controllers.js")
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delte a city",
            err:error
        }); ;
    }
}
const get=async (req,res)=>{
    try {
        const response=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully fetched a city",
            err:{}
        }); 
        
    } catch (error) {
        console.log("error at controllers city controllers.js")

        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to fetched a city",
            err:error
        }); ;
    }
}
const getAll=async(req,res)=>{
    try {
        const response =await cityService.getAllCities();
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully fetched all city",
            err:{}
        })
    } catch (error) {
        console.log("error at controllers city controllers.js")
           return res.status(500).json({
            data:{},
            success:false,
            message:"not able to fetched a city",
            err:error
        }); ;
    }
}
module.exports={
    create,
    destroy,
    get,
    update,getAll
}
