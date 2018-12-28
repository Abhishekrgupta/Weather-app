const yargs = require('yargs');

var args = require('yargs-default-command')(yargs);

const axios = require('axios');

args
  .command('*', 'default command', function(yargs) {  
  })
  .args;

var argv = yargs
        .options({
            a:{
                demand: false,
                alias: 'address',
                describe: 'Address to fetch weather for',
                string: true
            }
        })
        
        .help()
        .alias('help','h')
        .argv;

        var enAddress = encodeURIComponent(argv.address);
        var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${enAddress}&key=AIzaSyDQuxmoA5q9MLOJnzbGpktEPDZv6NVdZbY`;

        axios.get(geocodeUrl).then((response) => {

        if(response.data.status === 'ZERO_RESULTS'){
                throw new Error('Unable to find address');          
        }

        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        console.log(lat);
        console.log(lng);
        
        var weatherUrl = `https://api.darksky.net/forecast/a772e07ab109d40f4114ee6ebcaf8a0d/${lat},${lng}`;

        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
        })
        .then((response) => {
        var Temprature = response.data.currently.temperature;
        var ApparentTemp = response.data.currently.apparentTemperature;
        console.log(`It's ${Temprature} temp. Apparent temp is ${ApparentTemp}`);    
        
        })
        .catch((e) => {
            if(e.code === 'ENOTFOUND'){

            console.log('Unable to connect to server');

            }
       });





  