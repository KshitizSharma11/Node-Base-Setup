const {Logger}= require('../config/logger-config');
class Crud{

constructor(model)
{
    this.model=model;
}
async create(data)
{
    try {
        
        const response= await this.model.create(data);
        return response;
    } catch (error) {
        Logger.error("Something went wrong inside creation part");
        console.log(error);
    }
}
async destroy(id)
{
    try {
        
        const response= await this.model.destroy({
            where:{id:id}
        });
        return response;
    } catch (error) {
        Logger.error("Something went wrong inside deletion part");
        console.log(error);
    }
}

async get(id)
{
    try {
        
        const response= await this.model.findByPk({
            where:{id:id}
        });
        return response;
    } catch (error) {
        Logger.error("Something went wrong inside get part");
        console.log(error);
    }
}
async getAll()
{
    try {
        
        const response= await this.model.findAll();
        return response;
    } catch (error) {
        Logger.error("Something went wrong inside getAll part");
        console.log(error);
    }
}
async update(id,data)
{
    try {
        
        const response= await this.model.update(data,{
            where:{id:id}
        });
        return response;
    } catch (error) {
        Logger.error("Something went wrong inside updation part");
        console.log(error);
    }
}

}
module.exports=Crud;