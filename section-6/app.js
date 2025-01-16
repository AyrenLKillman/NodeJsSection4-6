const request = require('request')
//! this is currently depreciated, if this weather app part does not function, that is probably why

const url = "https://api.weatherstack.com/current?access_key=2c0a0045f17e83ac61011b100adf6e32&query=37.8267,-122.4233&units=f"

request({url: url, json: true}, (error, response) => {
    console.log("it is currently " + response.body.current.temperature + " degrees out. it feels like " +  response.body.current.feelslike + " degrees out")
})
//!vid 5