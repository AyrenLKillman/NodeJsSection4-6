const request = require('request')
//! this is currently depreciated, if this weather app part does not function, that is probably why

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

// const geourl = "https:api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtpbGxtYW4xcyIsImEiOiJjbTV6cXB6ZDMwNWxiMnFwcnd6d293eHpjIn0.gIGpMceUPqOwIFFed8IBYA&limit=1"


// request({ url: geourl, json: true }, (error, response) => {
//     const latitude = response.body.features[0].center[0]
//     const longitude = response.body.features[0].center[1]
//     console.log(latitude, longitude)
// })
const geocodeURL = 'https://api.mapbox.com/geocoding/v6/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
        if (error){
        console.log('unable to connect')
    } else if (response.body.features.length === 0) {
        console.log('unable to find location')
    } 
    else {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
}

})