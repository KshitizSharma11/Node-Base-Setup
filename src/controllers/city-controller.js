const {CityService}= require('../services');
const {StatusCodes}= require('http-status-codes');
const {successResponse,errorResponse}= require('../utils/common');
const createCity=async(req,res)=>{
    try {
        const data=req.body;
        const city=await CityService.createCity(data);
        if(city)
        {
        successResponse.data=city;
        
        res.status(StatusCodes.CREATED).json(successResponse);
        }
    } catch (error) {
        errorResponse.message=error.message;
        res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
}

module.exports={createCity};