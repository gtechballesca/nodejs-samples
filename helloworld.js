// const fs = require('fs');
// const  ch  = require('./check.js');
// const validator = require('validator');
// const dataJson = require('./data-json.js');
// const arrowFunction = require('./arrow-function.js');
// console.log("====================================");
// dataJson();
// console.log("====================================");
// arrowFunction();
// console.log("====================================");

// fs.writeFileSync('hello.txt', 'Hello World');
// console.log("Hello World");


// ch();

// const isURL = validator.isURL('https://www.google.com');
// console.log(`Is Google.com is a URL ${isURL}`); // true


// const cmd = process.argv[2];
// console.log(`Command is ${cmd}`); // node helloworld.js test
// if (cmd === 'helloworld') {
//     console.log(`We received your command ${cmd}`);
// } else {
//     console.log(`Unknown command ${cmd}`);
// }



// const yargs = require('yargs');
// yargs.version('1.1.0');

// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         }, 
//         body: {
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv) {
//         console.log('Title: ' + argv.title);
//         console.log('Body: ' + argv.body);
//     }
// });

// console.log(yargs.argv);

// console.log("====================================");

// const bindingFunction = require('./binding-function.js');
// console.log(bindingFunction.guestList.join(''));

// console.log("====================================");
// const arrayFunction = require('./array-function.js');
// console.log("Age " + arrayFunction().age + " Name " + arrayFunction().name);
// console.log("====================================");
// const asyncOne = require('./async-one.js');
// console.log(asyncOne());
// console.log("====================================");
// const fs1 = require('fs');
// fs1.writeFileSync('helloagain.txt', 'Hello World again  again and again');


// const request = require('request');
// const { sample } = require('rxjs');
// const url = 'https://fake-json-api.mock.beeceptor.com/users';

// request({url}, (error, response) => {
//     const data = JSON.parse(response.body);

//     const userWithGmail = data.find(user => user.email.indexOf('@yahoo.com') >=0);

//     console.log(userWithGmail );
// });

// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1';
// request({url: geocodeURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!');
//     } else if (response.body) {
//         console.log(response.body)
//         console.log('Unable to find location. Try another search.');
//     } else {
//         const latitude = response.body.features[0].center[0];
//         const longitude = response.body.features[0].center[0];
//         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//     }
// });

// console.log("====================================");

// const name = 'Andrew';
// const userAge = 27;

// const user = {
//     name,
//     age: userAge,
//     location: 'Philadelphia'
// };

// console.log(user);

// console.log("====================================");

// const product = {
//     label: 'Red NoteBook',
//     price: 3,
//     stock: 201,
//     salPrice: undefined, 
//     rating: 4.2

// };

// const transaction = (type, { label, stock}) => {
//     console.log(type, label, stock)
// };

// transaction('order', product);


console.log("====================================");

const https = require('https');

const url = 'https://fake-json-api.mock.beeceptor.com/users';

const request = https.request(url, (response)=> {

    let data = '';

    response.on('data', (chunk)=> data = data + chunk.toString());

    response.on('end', () => console.log(JSON.parse(data)));

});