const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Jordan API',
    description: 'API to provide data Jordan application data',
  },
  host: 'localhost:3001',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['../routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);