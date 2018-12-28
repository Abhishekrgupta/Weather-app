const request = require('request');

var geocodeAddress = (address) => {
 
    return new Promise((resolve, reject) => {

        setTimeout(() => {
           
            var enAddress = encodeURIComponent(address);
            enURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${enAddress}&key=AIzaSyDQuxmoA5q9MLOJnzbGpktEPDZv6NVdZbY`;
            console.log(enURL);
            request({
            url: enURL,
            json: true
            }, (error, response, body) => {
            if(error){
               reject('Unable to connect...');    
            }else if(body.status === 'ZERO_RESULTS'){
                reject('Unable to find address.');
            }else if(body.status === 'OK') {
                resolve({
                            Address: body.results[0].formatted_address,
                            Latitude: body.results[0].geometry.location.lat,
                            Longitude: body.results[0].geometry.location.lng
                        });
            }
            });
        }, 2000);

    });

};

geocodeAddress('pashan road') 
                            .then((location) => {
                                console.log(JSON.stringify(location, undefined, 2));
                            }, (errorMsg) => {
                                console.log(errorMsg);
                            })