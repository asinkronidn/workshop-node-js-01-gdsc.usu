const fs = require('fs'); // // panggil fungsi file
const http = require('http');
const portNumber = 5000;

// definisikan template
const homePageTemplate = fs.readFileSync('./templates/index.html');
const aboutTemplate = fs.readFileSync('./templates/about.html');
const contactTemplate = fs.readFileSync('./templates/contact.html');
const notFoundTemplate = fs.readFileSync('./templates/notFound.html');


// definisikan file asset
// const logoWebsite = fs.readFileSync('./assets/logo-website.png');


const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePageTemplate);
    }
	else if(req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(aboutTemplate);
	}
    else if(req.url === '/contact') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(contactTemplate);
    }
    // else if(req.url === '/logo-website.png'){
    // 	res.writeHead(200, {'content-type': 'image/png'});
    //     res.write(logoWebsite);
    //     res.end();
    // }
	else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write(notFoundTemplate);
    }
    res.end();
})

server.listen(portNumber, () => {
	console.log('Server listening at port ' + portNumber);
})
