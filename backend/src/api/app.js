const express = require('express');
const cors = require('cors');
const routes = require('../routes/index')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/swagger.json');


const app = express();

app.use(cors());

app.use(express.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(routes);

module.exports = app