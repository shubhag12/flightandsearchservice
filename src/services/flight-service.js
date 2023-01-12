const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("error in service layer this is the error");
      throw { error };
    }
  }
  async getAllFlightData(data) {
    //todo
    try {
      const flights = await this.flightRepository.getAllFlight(data);
      return flights;
    } catch (error) {
      console.log("error in service layer");
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await this.flightRepository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("error in service layer");
      throw { error };
    }
  }
  async updateFlight(flightId,data) {
    try {
      const flight = await this.flightRepository.updateFlight(flightId,data);
      return flight;
    } catch (error) {
      console.log("error in service layer");
      throw { error };
    }
  }
}

module.exports = FlightService;
