import { useEffect, useState } from 'react';
import PlayerService from '../services/PlayerService'

function Player() {
  const [players, setPlayers] = useState([]);

  const updatePlayers = async () => {
    const players = await PlayerService.fetchPlayersFromBackend();
    setPlayers(players);
  }

  return (
    <div>
      <button onClick={() => updatePlayers()}>UPDATE</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr>
              <td>{player.id}</td>
              <td>{player.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Player;