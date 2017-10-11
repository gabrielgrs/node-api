'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();


const username = "admin";
const password = "admin";
mongoose.connect('mongodb://' + username + ':' + password + '@ds113505.mlab.com:13505/gabrielgrsdb');


// Carrega os models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');


// Carrega as rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const customerRoute = require('./routes/customer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customer', customerRoute);
app.use('/order', orderRoute);

module.exports = app;
console.log('APP exportada com sucesso.');