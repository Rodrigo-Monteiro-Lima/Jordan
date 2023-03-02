const createPlayer = async ({ positions, currentTeam, ...player }) => {
  const playerId = await playerModel.createPlayer(player);
  const resultPosition = await positionModel.linkPlayerToPositions(playerId, positions);
  const resultCurrentTeam = await playerHasTeamModel.setCurrentTeam(playerId, currentTeam);
  
  return { 
    ...player,
    id: playerId,
  };
};

module.exports = {
  createPlayer,
};