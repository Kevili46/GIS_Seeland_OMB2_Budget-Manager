//////////////////////////////////////////////////////////////////
// ----- erster Versuch, bitte app.js als Server starten! ------------
//////////////////////////////////////////////////////////////////

const http = require('http'); // http module
const fs = require('fs'); // FileSystem module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log('Request made!');
    response.setHeader('Content-Type', 'text/html');

    /* const url = new URL(request.url || "", `http://${request.headers.port}`);

    switch(url.pathname) {
    case '/':
        path = 'index.html';
        response.statusCode = 200;
        break;
    case '/home':
        path = 'home.html';
        response.statusCode = 200;
        break;
    case '/transaktionen':
        path = 'transaktionen.html';
        response.statusCode = 200;
        break;
    case '/statistiken':
        path = 'statistiken.html';
        response.statusCode = 200;
        break;
    case '/einnahme':
        path = 'einnahme.html';
        response.statusCode = 200;
        break;
    case '/ausgqbe':
        path = 'ausgabe.html';
        response.statusCode = 200;
        break;
    default:
        path = 'index.html';
        response.statusCode = 301;
        break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            response.write(data);
            response.end();
        }
    }); */
});

server.listen(port, hostname, () => {
    console.log('Server verbunden');
});