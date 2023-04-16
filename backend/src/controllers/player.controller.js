const playerService = require('../services/player.service');

const createPlayer = (request, response) => {
  /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Player request',
          schema: {
            "name": "Michael Jordan",
            "birthdate": "20-06-1967",
            "weight": 100,
            "height": 205,
            "localId": 1,
            "positions": [1],
            "predominantHand": "Esquerda",
            "currentTeam": {
              "id": 5,
              "dateSign": "04-01-2023"
            }
          }
  } */
  /* #swagger.responses[201] = {
           description: 'Player created successfully.',
           schema: {
             "name": "Michael Jordan",
             "birthdate": "20-06-1967",
             "weight": 100,
             "height": 205,
             "local": {
               "id": 1,
               "name": "São Paulo"
             },
             "positions": [1],
             "predominantHand": "Esquerda",
             "currentTeam": {
               "id": 5,
               "dateSign": "04-01-2023"
             }
           }
   } */
  const player = request.body;
  const newPlayer = playerService.createPlayer(player);
  response.status(201).json(newPlayer);
};

const getPlayers = async (_req, res) => {
  const players = await playerService.getPlayers();
  console.log(players);
  return res.status(200).json(players);
};

module.exports = {
  createPlayer,
  getPlayers,
};