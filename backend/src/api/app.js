const express = require('express');
const { userController } = require('../controllers')
const routes = require('../routes/index')

const app = express();

app.use(express.json());

app.use(routes);

app.get('/users', userController.getAllUser);

app.get('/users/:id', userController.getUserById);

app.delete('/users/:id', userController.deleteUser);

app.post('/users', userController.createUser);

app.put('/users/:id', userController.updateUser);

module.exports = app