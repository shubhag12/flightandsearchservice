const {ClientErrorCodes}=require('../utils/error-code'); 
const validateCreateFlight=(req,res,nex)=>{
 if(
    !req.body.flightNumber||
    !req.body.airplaneId||
    !req.body.arrivalAirportId||
    !req.body.departureAirportId||
    !req.body.arrivalTime||
    !req.body.departureTime||
    !req.body.price
){
      //if any of the body param is missing we come inside middlewares

    return res.status(ClientErrorCodes.BAD_REQUEST).json({
        data: {},
        success: false,
        message: "invalid request body for create flight",
        err: "missing mandatory properties to create flight",
    });
 }
 nex();
}
module.exports={
    validateCreateFlight
}