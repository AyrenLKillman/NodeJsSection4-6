const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
//! bunch of this is outdated/changed, so sadly not everything works :(
// const url = "https://api.weatherstack.com/current?access_key=2c0a0045f17e83ac61011b100adf6e32&query=37.8267,-122.4233&units=f"


// request({url: url, json: true}, (error, response) => {
//     if (error){
//         console.log('unable to connect')
//     } else if (response.body.error) {
//         console.log('unable to find location')
//     } 
//     else {
//    console.log(response.body.current.weather_descriptions[0] + ". it is currently " + response.body.current.temperature + " degrees out. it feels like " +  response.body.current.feelslike + " degrees out")
// }
// })




geocode('Boston', (error, data) => {
    console.log('error', error)
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) =>{
    console.log('error', error)
    console.log('Data', data)
})