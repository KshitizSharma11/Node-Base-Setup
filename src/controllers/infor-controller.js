const {StatusCodes}=require('http-status-codes');
const info=(req,res)=>{
   res.status(StatusCodes.OK).json({
    sucess:'true',
    messgae:'tatti hui nhi',
    data:{},
    error:{}
   })
}
module.exports={info};