const express = require('express')

const app = express();

app.use(express.json());

const STATUS_CODE_OK = 200;

module.exports = app