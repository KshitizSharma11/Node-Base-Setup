const {Logger}= require('../config/logger-config');
class Crud{

constructor(model)
{
    this.model=model;
}
async create(data)
{
   
        
        const response= await this.model.create(data);
        return response;
    
}
async destroy(id)
{
    
        
        const response= await this.model.destroy({
            where:{id:id}
        });
        return response;

}

async get(id)
{
    
        const response= await this.model.findByPk(id);
        return response;
   
}
async getAll()
{
    
        
        const response= await this.model.findAll();
        return response;

}
async update(id,data)
{
    
        
        const response= await this.model.update(data,{
            where:{id:id}
        });
        return response;
    
}

}
module.exports=Crud;