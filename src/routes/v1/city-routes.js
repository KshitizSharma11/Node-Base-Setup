const express=require('express');
const {CityController}=require('../../controllers');
const router= express.Router();
const {CityMiddleware}=require('../../middlewares');
router.post('/',CityMiddleware.validateCreateRequest,CityController.createCity);
module.exports=router;