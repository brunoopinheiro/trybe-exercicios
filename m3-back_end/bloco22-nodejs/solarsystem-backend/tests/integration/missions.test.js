const chai = require('chai');
const chatHttp = require('chai-http');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chatHttp);

describe('Rota de missões', function () {
  describe('GET /missions', function () {
    it('Returns a missions list', async function () {
      const response = await chai.request(app).get('/missions');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.haveOwnProperty('missions');
      expect(response.body.missions).to.be.instanceOf(Array);
    });
  });

  describe('POST /missions', function () {
    it('Retorna a missão criada com um id', async function () {
      const mockMission = {
        name: 'Trybe',
        year: '2022',
        country: 'Brasil',
        destination: 'Titã',
      };

      const response = await chai.request(app).post('/missions').send(mockMission);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.haveOwnProperty('mission');
      expect(response.body.mission).to.haveOwnProperty('id');
      expect(response.body.mission.name).to.equal(mockMission.name);
      expect(response.body.mission.year).to.equal(mockMission.year);
      expect(response.body.mission.country).to.equal(mockMission.country);
      expect(response.body.mission.destination).to.equal(mockMission.destination);
    });
  });
});
