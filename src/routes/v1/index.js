const express=require('express');
const CityController=require('../../controllers/citycontroller');
const FlightController=require('../../controllers/flightcontroller');
const AirportController=require('../../controllers/airport-controller');
const router=express.Router();
// function fun(req,res,nex){
//  console.log("inside fun");
//  nex();  debugging
// }

router.post('/city',CityController.create);

router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.get('/city/:id',CityController.get);

router.post('/flight',FlightController.create);
router.get('/flight',FlightController.getAll);

router.post('/airports',AirportController.create);
 

module.exports=router;