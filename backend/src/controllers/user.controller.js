const { userService } = require('../services');

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);
  if (user === null) {
    return res.status(500).json({ message: 'Internal Server Error'});
  }
  if (user === undefined) {
    return res.status(404).json({ message: 'User Not Found'});
  }
  return res.status(200).json(user)
};

const getAllUser = async (_req, res) => {
  const users = await userService.getAllUser();
  if (users === null) {
    return res.status(500).json({ message: 'Internal Server Error'});
  }
  return res.status(200).json(users);
}

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  const delUser = await userService.deleteUSer(id);
  if (delUser === undefined) {
    return res.status(404).json({ message: 'User Not Found'});
  }
  return res.sendStatus(204);
}

module.exports = {
  getUserById,
  getAllUser,
  deleteUser,
}