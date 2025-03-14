const {AirplaneService} =require('../services');
const {StatusCodes}= require('http-status-codes');
async function createAirplane(req,res){
    try {
       const data=req.body;
      
       const resp= await AirplaneService.createAirplane(data);
        res.status(StatusCodes.CREATED).json(resp);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }

}
module.exports={createAirplane};