const {AirplaneService} =require('../services');
const {StatusCodes}= require('http-status-codes');
const {errorResponse,successResponse} = require('../utils/common');
async function createAirplane(req,res){
    try {
       const data=req.body;
      
       const resp= await AirplaneService.createAirplane(data);
       if(resp)
       {
       successResponse.data=resp;
       successResponse.message='created airplane successfully';
        res.status(StatusCodes.CREATED).json(successResponse);
       }
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
            else{
            successResponse.data=resp;
            successResponse.message='fetched airplane successfully';
            res.status(StatusCodes.OK).json(successResponse);
            }
        } catch (error) {
            errorResponse.error=error.message;
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        }
    }

    async function removeAirplane(req,res){
        try {
            const id=req.params.id;
            const resp= await AirplaneService.deleteAirplane(id);
            if(!resp){
                errorResponse.error='Airplane not found';
                res.status(StatusCodes.NOT_FOUND).json(errorResponse);
            }
            else{
            successResponse.data=resp;
            successResponse.message='deleted airplane successfully';
            res.status(StatusCodes.OK).json(successResponse);
            }
        } catch (error) {
            errorResponse.error=error.message;
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
        }
    }
module.exports={createAirplane,getAllAirplanes,getAirplane,removeAirplane};