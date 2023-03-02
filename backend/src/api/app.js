const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const { userController } = require('../controllers')

const app = express();

app.use(express.json());

const STATUS_CODE_OK = 200;
const STATUS_NOT_FOUND = 404;
const STATUS_CODE_NO_CONTENT = 204;
const STATUS_CODE_CREATED = 201;

app.get('/users', userController.getAllUser);

app.get('/users/:id', userController.getUserById);

app.delete('/users/:id', userController.deleteUser);

app.post('/users', async (req, res) => {
  const { body } = req;
  const contentPath = path.resolve(__dirname, '..', '..', 'data', 'users.json');
  const content = await fs.readFile(contentPath, 'utf8');
  const users = JSON.parse(content);
  const newId = users.map(({id}) => id).sort()[users.length - 1] + 2;
  const newUser = {id: newId, ...body }
  users.push(newUser);
  await fs.writeFile(contentPath, JSON.stringify(users, null, 2), 'utf8');
  return res.status(STATUS_CODE_CREATED).json(newUser);
});


app.put('/users/:id', async (req, res) => {
  const {name, email, password} = req.body;
  const {id} = req.params;
  const contentPath = path.resolve(__dirname, '..', '..', 'data', 'users.json');
  const content = await fs.readFile(contentPath, 'utf8');
  const users = JSON.parse(content);
  const newUsers = users.map((user) => {
    if (Number(id) === user.id) {
      return {
        ...user,
        name,
        email,
        password,
      };
    }
    return user;
  });
  await fs.writeFile(contentPath, JSON.stringify(newUsers, null, 2), 'utf8');
  return res.sendStatus(STATUS_CODE_OK);
});
module.exports = app