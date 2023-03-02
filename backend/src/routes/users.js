const express = require('express');
const { userController } = require('../controllers/');

const userRouter = express.Router();

userRouter.get('/', userController.getAllUser);

userRouter.get('/:id', userController.getUserById);

userRouter.delete('/:id', userController.deleteUser);

userRouter.post('/', userController.createUser);

userRouter.put('/:id', userController.updateUser);

module.exports = userRouter;