const chai = require('chai');
const chaiHttp = require('chai-http');
const mockUsers = require('../mocks/mock.users.json');
const app = require('../../src/api/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testes da Api Jordan Backend', function () {
  describe('GET | /users', function () {
    it('Deve retornar o status 200', async function () {
      const response = await chai.request(app).get('/users');
      expect(response.status).to.be.equal(200);
    });
    it('Deve retornar uma lista de todos usuários no formado JSON sem a  senha', async function () {
      const response = await chai.request(app).get('/users');
      expect(response.body).to.deep.equal(mockUsers);
    });
  });
});