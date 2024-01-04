const fs = require('node:fs');
// jika menggunakan read file async
// harus menggunakan callback untuk mendapatkan hasil
fs.readFile('read.txt', 'utf8', (err, data) => {
  console.log(data);
});
console.log('Ini contoh async');