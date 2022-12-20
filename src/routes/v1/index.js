const express=require('express');
const CityController=require('../../controllers/citycontroller');
const router=express.Router();
// function fun(req,res,nex){
//  console.log("inside fun");
//  nex();  debugging
// }

router.post('/city',CityController.create);


module.exports=router;