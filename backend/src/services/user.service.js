const { userModel } = require('../models');

const getUserById = async (id) => {
  const user = await userModel.getUserById(id);
  if (!user) return undefined;
  const { password: _, ...rest } = user;
  return rest;
}

module.exports = {
  getUserById
}