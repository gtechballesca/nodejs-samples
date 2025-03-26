const fs = require('fs');
const  ch  = require('./check.js');


fs.writeFileSync('hello.txt', 'Hello World');
console.log("Hello World");


ch();