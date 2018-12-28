
var syncAdd = (a, b) =>{

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a+b);
            }else{
                reject('Both must be numbers');
            }
        }, 2000);

    });
}


syncAdd(3,5)
            .then((res) => {
                console.log('Addition: ', res);   
                return syncAdd(res, 12);
            })
            .then((res) => {
                console.log('20', res);
            })
            .catch((err) => {
                console.log(err);
            });



































// var somePromise = new Promise((resolve, reject) =>{

//     setTimeout(() => {
//        // resolve('It worked');
//         reject('Didnt worked');
//     }, 3000);
    
// });

// somePromise.then((msg) => {

//     console.log(msg);    

// }, (msg) => {
    
//     console.log(msg);    

// });

// somePromise.catch();