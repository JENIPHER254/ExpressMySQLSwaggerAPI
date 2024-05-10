//importing all controllers
const {createProduct, readProduct, deleteProduct}= require('./product.controller');
const routes = require('express').Router();

//creating api routes
routes.post('/', createProduct);
routes.get('/', readProduct);
routes.delete('/', deleteProduct);

module.exports = routes;