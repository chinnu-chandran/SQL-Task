const express = require('express');

const app = express();

const db = require('./util/database')

const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

app.use(bodyParser.json()); 

// db.execute('CREATE TABLE carts(cartId int PRIMARY KEY AUTO_INCREMENT, productId int , FOREIGN KEY(productId) REFERENCES products(id) , userId int , FOREIGN KEY (userId) REFERENCES users(userId) , quantity int);')


app.use('/',userRoutes);


app.listen(3000);