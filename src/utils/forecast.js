const request = require('request')

const forecast = (latitude, longitude, callback)=> {
    const url = 'https://api.darksky.net/forecast/29142579b6c95b705b2aa0949fd8fec5/'+ latitude +','+ longitude +'?units=si'

    request({url, json: true}, (error, {body} )=> {

        if(error) {
            callback('Unable to connect to the weather service!',undefined)

        } else if(body.error) {
            callback('Unable to find the location!',undefined)

         } else {
            callback(undefined,
                 body.daily.data[0].summary +
                ' It is currently '+ body.currently.temperature + ' degrees. ' +
                'Chances of precipitation are '+ body.currently.precipProbability + ' percent.'
            )

           }
    })

}

module.exports = forecast