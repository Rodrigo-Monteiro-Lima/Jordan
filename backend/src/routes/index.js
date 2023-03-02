const express = require('express');
const playerRouter = require('./players');

const routes = express.Router();

routes.use('/players', playerRouter);

module.exports = routes