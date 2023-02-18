const { userService } = require('../services');

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User Not Found'});
  }
  return res.status(200).json(user)
};

module.exports = {
  getUserById
}