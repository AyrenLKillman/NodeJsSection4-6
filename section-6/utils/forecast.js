const request = require('request')


const forecast = (latitude, longitude,  callback) => {
    const url = "https://api.weatherstack.com/current?access_key=2c0a0045f17e83ac61011b100adf6e32&query=" + latitude +',' + longitude  + "&units=f"

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect to services', undefined)
        } else if (response.body.error){
            callback("unable to find location", undefined)
        } else {
            callback(undefined, {
                desc: response.body.current.weather_descriptions[0],
                temp:  response.body.current.temperature,
                feels: response.body.current.feelslike
            })

        }
 })
}

module.exports = forecast