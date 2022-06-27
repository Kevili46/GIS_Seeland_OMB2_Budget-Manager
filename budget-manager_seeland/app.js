const express = require('express');
const mongoose = require('mongoose');
const Transaction = require('./object_models/transaction');

// create server with express
const app = express();

// View Engine: EJS to dynamically edit the HTML file
app.set('view engine', 'ejs');

// connect to MongoDB, if success create the server
const dbURI = 'mongodb+srv://Kevin:C43367@budglet.d00ju.mongodb.net/Budglet?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then(() => app.listen(3000, () => {
        console.log('Server verbunden');
        console.log('Verbindung zur Datenbank hergestellt');
    }))
    .catch((err) => console.log(err));


// ensure availability of CSS and JS Files
app.use(express.static('public'));

// convert submitted forms (transactions) into objects
app.use(express.urlencoded({ extended: true }));


// --------- match browserrequests to the respective html file
app.get('/', (request, response) => {
    response.render('index', { title: 'Start' });
});
app.get('/home', (request, response) => {
    Transaction.find()
        .then((result) => {
            response.render('home', { title: 'Home', transactions: result});
        })
        .catch((error) => {
            console.log(error);
        });
});
app.get('/transaktionen', (request, response) => {
    Transaction.find().sort({createdAt: -1})
        .then((result) => {
            response.render('transaktionen', { title: 'Transaktionen', transactions: result});
        })
        .catch((error) => {
            console.log(error);
        });
});
app.get('/statistiken', (request, response) => {
    response.render('statistiken', { title: 'Statisitken' });
});
app.get('/einnahme', (request, response) => {
    response.render('einnahme', { title: 'Einnahme' });
});
app.get('/ausgabe', (request, response) => {
    response.render('ausgabe', { title: 'Ausgabe' });
});


// -----------------Server functions

// Save transaction to DB Budglet -> transactions
// INCOME
app.post('/einnahme', (request, response) => {
    console.log(request.body);
    const transaction = new Transaction(request.body);
    transaction.save()
        .then(() => {
            console.log('Transaktion gespeichert');
            response.redirect('/home');
        })
        .catch((error) => {
            console.log(error);
        });
});
// EXPENSE
app.post('/ausgabe', (request, response) => {
    console.log(request.body);
    const transaction = new Transaction(request.body);
    // because of expense: betrag = -betrag
    transaction.betrag = -transaction.betrag;
    console.log(transaction);
    transaction.save()
        .then(() => {
            console.log('Transaktion gespeichert');
            response.redirect('/home');
        })
        .catch((error) => {
            console.log(error);
        });
});
