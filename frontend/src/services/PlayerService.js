import axios from 'axios';

const { REACT_APP_API_HOST, REACT_APP_API_PORT } = process.env;

// Não funciona porque "back" não é reconhecido na minha rede local / pelo meu navegador, só dentro do docker
// const URL_BACKEND = `http://${REACT_APP_API_HOST}:${REACT_APP_API_PORT}`;

const URL_BACKEND = `http://localhost:${REACT_APP_API_PORT}`;

const PlayerService = {
  fetchPlayers: () => {
    return [
      {
        id: Math.random(),
        name: 'Murilo'
      }
    ];
  },
  fetchPlayersFromBackend: async () => {
    // desestruração e renomeando a variável "data" para "players"
    const { data: players } = await axios.get(`${URL_BACKEND}/player`);

    console.log(process.env);
    console.log(URL_BACKEND);

    return players;
  }
};

export default PlayerService;