//importing all controllers
const {createProduct}= require('./user.controller');
const routes = require('express').Router();

//creating api routes
routes.post('/',createProduct);

module.exports = routes;