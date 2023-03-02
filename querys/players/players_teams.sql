SELECT player.name, team.name
FROM jordan.player
    JOIN jordan.player_has_team AS contrato ON player.name = contrato.player_id
    JOIN jordan.team ON contrato.team_id = team.id;