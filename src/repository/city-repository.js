const {City}=require("../models/index");

class CityRepository{
    async createcity({name}){
        try{
          const city=await City.create({name});
          return city;
        }
        catch(error){
           throw {error};  
        }
    }
    async deletecity(cityId){
        try{
            await City.destroy({
                where:{
                     id:cityId
                }
            });
        }
        catch(error){
            throw {error};  
         }
    }
    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId); 
            return city;
        }
        catch(error)
        {
            console.log("something went wrong in the repository layer");
            throw{error};
        }

    }
    async updatecity(cityId,data){
        try{
                const city=await City.update(data,{
                    where:{
                        id:cityId
                    }
                }); 
                return city;
        }
        catch(error)
        {
            console.log("something went wrong in the repository layer");
            throw{error};
        }       
    }
}
module.exports=CityRepository