// disini kita akan menggunakan node.js sebagai web server
const http = require('http');
const portNumber = 5000;

// definisikan server
const server = http.createServer((req, res) => {
	// definisikan http status code dan content-type' (tipe response)
	res.writeHead(200, {'content-type': 'text/html'});
	// definisikan isi response (response body)
	res.write('Hello World');

	// res.end(); // digunakan untuk memberi tahu node.js kalau pemprosesan response berakhir disini
})

// pengaturan port yang ingin digunakan
server.listen(portNumber, () => {
	console.log('Server listening at port ' + portNumber);
})
