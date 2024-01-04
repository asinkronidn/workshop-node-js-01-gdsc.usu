const fs = require('node:fs');
const data = fs.readFileSync('read.txt', 'utf8');
console.log(data);
console.log('Ini contoh sync');