const express = require('express');
const fs = require('fs');

// create server with express
const app = express();

// on port 3000
app.listen(3000, () => {
    console.log('Server verbunden');
});

// ensure availability of CSS and JS Files
app.use(express.static('public'));

// convert submitted forms into objects
app.use(express.urlencoded({ extended: true }));


// --------- match browserrequests to the respective html file
app.get('/', (request, response) => {
    response.sendFile('public/index.html', {root: __dirname});
});
app.get('/home', (request, response) => {
    response.sendFile('public/home.html', {root: __dirname});
});
app.get('/transaktionen', (request, response) => {
    response.sendFile('public/transaktionen.html', {root: __dirname});
});
app.get('/statistiken', (request, response) => {
    response.sendFile('public/statistiken.html', {root: __dirname});
});
app.get('/einnahme', (request, response) => {
    response.sendFile('public/einnahme.html', {root: __dirname});
});
app.get('/ausgabe', (request, response) => {
    response.sendFile('public/ausgabe.html', {root: __dirname});
});


// -----------------Server functions

// Array of Transactions
const transactions = [];
function writeToFile() {
    const taToString = JSON.stringify(transactions);
    fs.writeFile('public/savings/transactions.txt', taToString, () => {
        console.log('file was written');
});
}

app.post('/transaktionen', (request, response) => {
    console.log(request.body);
    const transaction = request.body;
    transactions.push(transaction);
    writeToFile();
    response.redirect('/home');
});