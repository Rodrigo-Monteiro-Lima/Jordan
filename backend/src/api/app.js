const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();

app.use(express.json());

const STATUS_CODE_OK = 200;

app.get('/users', async (_req, res) => {
  const contentPath = path.resolve(__dirname, '..', '..', 'data', 'users.json');
  const content = await fs.readFile(contentPath, 'utf8');
  const users = JSON.parse(content);
  const response = users.map((user) => {
    const { password: _, ...rest } = user;
    return rest;
  });
  return res.status(STATUS_CODE_OK).json(response);
});

module.exports = app