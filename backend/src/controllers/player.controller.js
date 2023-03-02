const playerService = require('../services/player.service');

const createPlayer = (request, response) => {
  const player = request.body;
  const newPlayer = playerService.createPlayer(player);
  response.status(201).json(newPlayer);
};

module.exports = { 
  createPlayer,
};