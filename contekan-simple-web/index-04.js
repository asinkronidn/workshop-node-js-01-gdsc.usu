const fs = require('fs'); // // panggil fungsi file
const http = require('http');
const portNumber = 5000;

// definisikan file asset
// const logoWebsite = fs.readFileSync('./assets/logo-website.png');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        // definisikan template
        const homePageTemplate = fs.readFileSync('./templates/index.html');
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePageTemplate);
    }
	else if(req.url === '/about') {
        // definisikan template
        const aboutTemplate = fs.readFileSync('./templates/about.html');
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(aboutTemplate);
	}
    else if(req.url === '/contact') {
        // definisikan template
        const contactTemplate = fs.readFileSync('./templates/contact.html');
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(contactTemplate);
    }
    // else if(req.url === '/logo-website.png'){
    // 	res.writeHead(200, {'content-type': 'image/png'});
    //     res.write(logoWebsite);
    //     res.end();
    // }
	else {
        // definisikan template
        const notFoundTemplate = fs.readFileSync('./templates/notFound.html');
        res.writeHead(404, {'content-type': 'text/html'});
        res.write(notFoundTemplate);
    }
    res.end();
})

server.listen(portNumber, () => {
	console.log('Server listening at port ' + portNumber);
})
