const request = require('request')


const forecast = (latitude, longitude,  callback) => {
    const url = "https://api.weatherstack.com/current?access_key=2c0a0045f17e83ac61011b100adf6e32&query=" + latitude +',' + longitude  + "&units=f"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to services', undefined)
        } else if (body.error){
            callback("unable to find location", undefined)
        } else {
            callback(undefined, {
                desc: body.current.weather_descriptions[0],
                temp:  body.current.temperature,
                feels: body.current.feelslike
            })

        }
 })
}

module.exports = forecast