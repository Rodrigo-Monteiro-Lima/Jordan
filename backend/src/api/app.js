const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();

app.use(express.json());

const STATUS_CODE_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_CODE_NO_CONTENT = 204;
const STATUS_CODE_CREATED = 201;

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

app.get('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  const contentPath = path.resolve(__dirname, '..', '..', 'data', 'users.json');
  const content = await fs.readFile(contentPath, 'utf8');
  const users = JSON.parse(content);
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return res.status(STATUS_NOT_FOUND).json({ message: 'User Not Found'});
  }
  const { password: _, ...rest } = foundUser;
  return res.status(STATUS_CODE_OK).json(rest)
})

app.delete('/users/:id', async (req, res) => {
  const id = Number(req.params.id);
  const contentPath = path.resolve(__dirname, '..', '..', 'data', 'users.json');
  const content = await fs.readFile(contentPath, 'utf8');
  const users = JSON.parse(content);
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    return res.status(STATUS_NOT_FOUND).json({ message: 'User Not Found'});
  }
  const filterUsers = users.filter((user) => user.id !== id);
  await fs.writeFile(contentPath, JSON.stringify(filterUsers, null, 2), 'utf8');
  return res.sendStatus(STATUS_CODE_NO_CONTENT);
});

module.exports = app