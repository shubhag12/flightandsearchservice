const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createfilter(data) {
    //console.log('inside #create filter')
    let filter = {};
    if (data.arrivalAirportId) filter.arrivalAirportId = data.arrivalAirportId;
    if (data.departureAirportId)
      filter.departureAirportId = data.departureAirportId;
    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.gte]: data.minPrice } },
    //       { price: { [Op.lte]: data.maxPrice } },
    //     ],
    //   });
    // }
    let priceFilter=[];
    if (data.minPrice) {
     // Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push( { price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
     // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      priceFilter.push( { price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter,{[Op.and]:priceFilter});
    return filter;
  }
  async createFlight(data) {
    try {
      const flights = await Flights.create(data);
      return flights;
    } catch (error) {
      console.log("some error in repository layer");
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }
  async updateFlight(flightId,data) {
    try {
      const flight = await Flights.update(data,{
        where:{
          id:flightId
        }
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      const filterObject = this.#createfilter(filter);
      // console.log(filterobject);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }
}
module.exports = FlightRepository;
