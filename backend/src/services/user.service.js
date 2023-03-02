const { userModel } = require('../models');

const getUserById = async (id) => {
  const user = await userModel.getUserById(id);
  if (user === null) return null;
  if (user === undefined) return undefined;
  const { password: _, ...rest } = user;
  return rest;
}

const getAllUser = async () => {
  const users = await userModel.getAllUser();
  if (users === null) return null;
  const response = users.map((user) => {
    const { password: _, ...rest } = user;
    return rest;
  });
  return response;
}

module.exports = {
  getUserById,
  getAllUser,
}