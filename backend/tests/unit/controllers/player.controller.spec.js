const { expect } = require('chai');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const playerController = require('../../../src/controllers/player.controller');

describe('Controller de player', function () {
  it('Se chama o status com 201 em caso de sucesso', async function () {
    const req = {
      body: {
        name: "Murilo Scapim",
        birthDate: "1996-05-01",
        weight: 70.0,
        height: 1.75,
        cityId: 1,
        predominantHandId: 1
      }
    };
    const res = {};
    const jsonResponse = {
      id: 1,
      name: "Murilo Scapim",
      birthDate: "1996-05-01",
      weight: 70.0,
      height: 1.75,
      city: {
        id: 1,
        name: "São Paulo",
      },
      predominantHand: {
        id: 1,
        name: "Direita",
      },
      active: true
    }
    // NUNCA DUBLAR O MÉTODO QUE VAI SER TESTADO NO ACT
    // res.status = sinon.stub(playerController, 'addPlayer');
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    await playerController.addPlayer(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(jsonResponse);
  });
});