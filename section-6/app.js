const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
//! bunch of this is outdated/changed, so sadly not everything works :(

const address = process.argv[2]

if (!address) {
    console.log('add a location pls')
} else {geocode(address, (error, {latitude, longitude, location }) => {
    if (error) {
       return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastdata) =>{
        if (error) {
            return console.log(error)
         }

         console.log(location)
         console.log(forecastdata)
    })
})

}

