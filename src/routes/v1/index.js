const express=require('express');
const CityController=require('../../controllers/citycontroller');
const router=express.Router();

router.post('/city',CityController.create);

module.exports=router;