//importing all controllers
const {createProduct, readProduct}= require('./product.controller');
const routes = require('express').Router();

//creating api routes
routes.post('/', createProduct);
routes.get('/', readProduct);

module.exports = routes;