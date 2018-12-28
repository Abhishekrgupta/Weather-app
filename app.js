const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

var argv = yargs
        .options({
            a:{
                demand: true,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true
            }
        })
        .help()
        .alias('help','h')
        .argv;

console.log(argv);

geocode.geocodeAddress(argv.address, (errorMessage, result) =>{

    if(errorMessage){
        console.log(errorMessage);
    }
    else{
        console.log(result.Address);   
        console.log(result.Latitude); 
        console.log(result.Longitude); 
        weather.getWeather(result.Latitude, result.Longitude, (errorMessage, weatherResult) =>{
            if(errorMessage){
                        console.log(errorMessage);
                    }
                    else{
                        console.log(`It's ${weatherResult.Temprature} temp. Apparent temp is ${weatherResult.ApparentTemp}`);    
                    }
        });
    }
});







  