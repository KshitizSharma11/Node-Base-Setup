const Crud= require('./crud-repo');
const {Airplane}=require('../models');
class AirplaneRepo extends Crud{
constructor()
{
    super(Airplane);
}

}
module.exports=AirplaneRepo;