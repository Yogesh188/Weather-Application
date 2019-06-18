const request = require('request')

const forecast = (latitude, longitude, callback)=> {
    const url = 'https://api.darksky.net/forecast/29142579b6c95b705b2aa0949fd8fec5/'+ latitude +','+ longitude +'?units=si'

    request({url, json: true}, (error, {body} )=> {

        if(error) {
            callback('Unable to connect to the weather service!',undefined)

        } else if(body.error) {
            callback('Unable to find the location!',undefined)

         } else {
             console.log(body.currently)
            callback(undefined,
                 body.daily.data[0].summary +
                ' It is currently '+ body.currently.temperature + ' degrees out. The high today is ' +
                body.daily.data[0].temperatureHigh + ' degrees with a low of ' + 
                body.daily.data[0].temperatureLow + ' degrees. ' +
                'Chances of precipitation are '+ body.currently.precipProbability*100 + ' percent.'
            )

           }
    })

}

module.exports = forecast