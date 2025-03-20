const {StatusCodes}=require('http-status-codes');
const {errorResponse}=require('../utils/common');
function validateCreateRequest(req,res,next){
  errorResponse.error="name not found or not in correct format";
  if(!req.body.name){
   res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
}
module.exports={ validateCreateRequest};