const express = require('express');
const {playerController} = require('../controllers/');

const playerRouter = express.Router();

playerRouter.post('/', playerController.createPlayer);

module.exports = playerRouter;