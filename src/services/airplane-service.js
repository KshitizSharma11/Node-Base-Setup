const {AirplaneRepo}=require('../repositories');

const airplane=new AirplaneRepo();
const createAirplane=async(data)=>{
    try {
        const plane=await airplane.create(data);
        return plane;
    } catch (error) {
        console.log(error);
    }

}

module.exports={createAirplane}