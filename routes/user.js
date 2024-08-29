const express = require('express');

const routes = express.Router();

const userController = require('../controllers/user');

const productController = require('../controllers/productController');

const cartController = require('../controllers/cartController');


routes.post ('/user1' , userController.postCreateUser);

routes.post ('/product' , productController.postProduct);


routes.get ('/users' , userController.getUser);

routes.get ('/products' , productController.getProduct);

routes.get ('/carts' , cartController.getCart);

routes.get('/users/:userId', userController.getUserById);

routes.post ('/users/:userId/cart' , cartController.postCart);

routes.put ('/users/:userId/carts' , cartController.putAddCart);

routes.patch ('/users/:userId/cart' , cartController.deleteCart);

routes.get ('/users/:userId/cartItems' , cartController.getCartItems);











module.exports = routes;