const { CityRepository } = require("../repository/index");
class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      const city = await this.cityRepository.createcity(data);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deletecity(cityId);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
  async updateCity() {
    try {
      const city = await this.cityRepository.updatecity(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
  async getCity() {
    try {
      const city = await this.cityRepository.getcity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw { error };
    }
  }
}
module.exports = CityService;
