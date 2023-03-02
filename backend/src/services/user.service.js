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

const deleteUSer = async (id) => {
    const users = await userModel.getAllUser();
    if (users === null) return null;
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) return undefined;
    const filterUsers = users.filter((user) => user.id !== id);
    await userModel.deleteUser(filterUsers);
    return true;
}

module.exports = {
  getUserById,
  getAllUser,
  deleteUSer,
}