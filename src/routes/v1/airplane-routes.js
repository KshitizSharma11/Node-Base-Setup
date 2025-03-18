const express= require('express');
const {AirplaneController} =require('../../controllers')
const {AirplaneMiddleWare} = require('../../middlewares');
const router=express.Router();

router.post('/',AirplaneMiddleWare.validateCreateRequest,AirplaneController.createAirplane);
router.get('/',AirplaneController.getAllAirplanes);

module.exports=router;