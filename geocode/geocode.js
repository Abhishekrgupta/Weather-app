const request = require('request');

var geocodeAddress = (address, callback) =>{

var enAddress = encodeURIComponent(address);
enURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${enAddress}&key=AIzaSyDQuxmoA5q9MLOJnzbGpktEPDZv6NVdZbY`;
console.log(enURL);
request({
  url: enURL,
  json: true
}, (error, response, body) => {
//   console.log(JSON.stringify(body, undefined, 2));
        if(error){
            callback('Unable to connect...');    
        }else if(body.status === 'ZERO_RESULTS'){
            callback('Unable to find address.');
        }else if(body.status === 'OK') {
           callback(undefined, {
               Address: body.results[0].formatted_address,
               Latitude: body.results[0].geometry.location.lat,
               Longitude: body.results[0].geometry.location.lng
           });
        // console.log('Address:'+ body.results[0].formatted_address);
        // console.log('Latitude:'+ body.results[0].geometry.location.lat);
        // console.log('Longitude:'+ body.results[0].geometry.location.lng);
        }else{
            console.log('Next time');
        }
});

};

module.exports={
    geocodeAddress
};