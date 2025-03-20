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
const getAllAirplanes=async()=>{
    try {
        const planes=await airplane.getAll();
        return planes;
    } catch (error) {
        console.log(error);
    }
}
const getAirplane=async(id)=>{
    try {
        const plane=await airplane.get(id);
        return plane;
    } catch (error) {
        console.log(error);
    }
}
const deleteAirplane=async(id)=>{
    try{
        const plane=await airplane.destroy(id);
        return plane;
    }
    catch(error) {
        console.log(error);
    }
}
module.exports={createAirplane,getAllAirplanes, getAirplane,deleteAirplane}