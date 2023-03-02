const fs = require('fs').promises;
const { resolve } = require('path');
const path = '../../data/users.json';

const readFile = async () => {
  try {
    const contentFile = await fs.readFile(resolve(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    throw new Error(error.message);
  }
};

const writeFile = async (content) => {
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  readFile,
  writeFile
}