const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7e0492253296b948d9091e8a83777969&query='+lat+','+long

    request({ url, json:true}, (error, { body }) =>{
        if(error){
            callback('Unable to reach weatherstack', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + " throughout the day. It is currently " + body.current.temperature +" but feels like " + body.current.feelslike)
        }
    })
}


module.exports = forecast