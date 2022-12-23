const { FlightService } = require("../services/index");
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    //console.log('inside controller')
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId, 
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };

    const flight = await flightService.createFlight(flightRequestData);

    return res.status(201).json({
      data: flight,
      success: true,
      message: "successfully created a flight",
      err: {},
    });
  } catch (error) {
    console.log("error at controllers flight controllers.js");
    return res.status(201).json({
      data: {},
      success: false,
      message: "not able to create a flight",
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    //console.log('inside controller')
    const flight = await flightService.getAllFlightData(req.query);

    return res.status(201).json({
      data: flight,
      success: true,
      message: "successfully fetched all fiights",
      err: {},
    });
  } catch (error) {
    console.log("error at controllers flight controllers.js");
    return res.status(201).json({
      data: {},
      success: false,
      message: "not able to fetch a flight",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
