const express=require('express');
const CityController=require('../../controllers/citycontroller');
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


module.exports=router;