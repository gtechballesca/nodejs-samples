const fs = require('fs');
const  ch  = require('./check.js');
const validator = require('validator');


fs.writeFileSync('hello.txt', 'Hello World');
console.log("Hello World");


ch();

const isURL = validator.isURL('https://www.google.com');
console.log(`Is Google.com is a URL ${isURL}`); // true