const request = require('request');


var getWeather = (lat, lng, callback) => {

    
    request({
        url: `https://api.darksky.net/forecast/a772e07ab109d40f4114ee6ebcaf8a0d/${lat},${lng}`,
        json: true
      }, (error, response, body) => { 
                if(error){
                    callback('Unable to connect to forcast server');   
                }else if(!error && response.statusCode === 200){
                    callback(undefined, {
                        Temprature: body.currently.temperature,
                        ApparentTemp: body.currently.apparentTemperature,
                    });
                }else{
                    callback('Unable to fetch weather');
                }      
      });

}


module.exports = {
    getWeather
};