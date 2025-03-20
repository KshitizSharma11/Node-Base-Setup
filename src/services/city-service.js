const {CityRepo} = require('../repositories')
const cityRepo = new CityRepo();
const {errorResponse}=require('../utils/common')
async function createCity(data){
     try {
        const res=await cityRepo.create(data);
        console.log("respomse "+res);
        return res;
     } catch (error) {
        if(error=='Duplicate Error'){
            errorResponse.message = 'Duplicate Error';
        return errorResponse;
        }
     }
}


module.exports = {
    createCity,
}
