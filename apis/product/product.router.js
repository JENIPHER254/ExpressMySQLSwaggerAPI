//importing all controllers
const {createProduct, readProduct, deleteProduct, updateProduct}= require('./product.controller');
const routes = require('express').Router();

//creating api routes
routes.post('/', createProduct);
routes.get('/', readProduct);
routes.delete('/', deleteProduct);
routes.put('/', updateProduct);

module.exports = routes;