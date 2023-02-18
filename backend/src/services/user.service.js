const { userModel } = require('../models');

const getUserById = async (id) => {
  const user = userModel.getUserById(id);
  const { password: _, ...rest } = user;
  return rest;
}

module.exports = {
  getUserById
}