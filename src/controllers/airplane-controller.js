const {AirplaneService} =require('../services');
const {StatusCodes}= require('http-status-codes');
const {errorResponse,successResponse} = require('../utils/common');
async function createAirplane(req,res){
    try {
       const data=req.body;
      
       const resp= await AirplaneService.createAirplane(data);
       successResponse.data=resp;
       successResponse.message='created airplane successfully';
        res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        errorResponse.error=error.message;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }

}
async function getAllAirplanes(req,res){
    try {
        const resp= await AirplaneService.getAllAirplanes();
        successResponse.data=resp;
        successResponse.message='fetched all airplanes successfully';
        res.status(StatusCodes.OK).json(successResponse);
    } catch (error) {
        errorResponse.error=error.message;
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
    }
}
    async function getAirplane(req, res) {
        try {
            const id=req.params.id;
            const resp= await AirplaneService.getAirplane(id);
            if(!resp){
                errorResponse.error='Airplane not found';
                res.status(StatusCodes.NOT_FOUND).json(errorResponse);
            }
            successResponse.data=resp;
            successResponse.message='fetched airplane successfully';
            res.status(StatusCodes.OK).json(successResponse);
        } catch (error) {
            errorResponse.error=error.message;
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        }
    }
module.exports={createAirplane,getAllAirplanes,getAirplane};