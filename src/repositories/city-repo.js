const Crud = require('./crud-repo');
const {City} = require('../models');
class CityRepo extends Crud{
    constructor()
    {
        super(City);
    }
}
module.exports=CityRepo;