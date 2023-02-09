const fs = require('fs/promises');
const path = require('path');

const usersFilePath = path.resolve(__dirname, 'users.json');

const restoreFileUsersPath = path.resolve(__dirname, 'restore.users.json');

const restore = async () => {
  const restoreJSON = await fs.readFile(restoreFileUsersPath, 'utf8');
  await fs.writeFile(usersFilePath, restoreJSON, 'utf8');
};

restore();
