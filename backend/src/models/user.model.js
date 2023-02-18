const fs = require('fs/promises');
const path = require('path');

const getUserById = async (id) => {
  const contentPath = path.resolve(__dirname, '..', '..', 'data', 'users.json');
  const content = await fs.readFile(contentPath, 'utf8');
  const users = JSON.parse(content);
  const foundUser = users.find((user) => user.id === id);
  return foundUser;
}

module.exports = {
  getUserById,
}