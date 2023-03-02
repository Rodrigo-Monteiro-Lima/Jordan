const fs = require('fs/promises');
const path = require('path');
const {readFile, writeFile} = require('../utils/readAndWrite')

const getUserById = async (id) => {
  try {
    const users = await readFile();
    const foundUser = users.find((user) => user.id === id);
    return foundUser;    
  } catch (error) {
    console.log(error);
    return null;
  }
}

const getAllUser = async () => {
  try {
    const users = await readFile();
    return users;    
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = {
  getUserById,
  getAllUser
}