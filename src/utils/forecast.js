const request = require("request");

const forecast = (Latitude, Longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=462147d36a578b044dcfa67694adafc3&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          "It is currently" +
          currently.temperature +
          "degrees out"
      );
    }
  });
};

module.exports = forecast;
