const express = require('express');
const playerRouter = require('./players');
const userRouter = require('./users');

const routes = express.Router();

routes.use('/players', playerRouter);
routes.use('/users', userRouter);

module.exports = routes