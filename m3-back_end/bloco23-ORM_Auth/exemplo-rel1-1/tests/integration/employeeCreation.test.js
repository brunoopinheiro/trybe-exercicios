const chai = require ('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../src/app');

// Omitir os console.log dos testes gerando um stub pra funcao
const consoleLogStub = stub(console, 'log');
before(() => consoleLogStub.returns(true));
after(() => consoleLogStub.restore());

describe('Rota POST /employees', () => {
  describe('quando os dados do body sao validos', () => {
    let postEmployee;
    let getEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app).post('/employees').send({
          firstName: 'Rodrigo',
          lastName: 'Oliveira',
          age: 30,
          city: 'TrybeCity',
          street: 'Rua Teste',
          number: 42,
        });

        const { body: { id } } = postEmployee;

        getEmployee = await chai.request(app).get(`/employees/${id}`);
      } catch (error) {
        console.error(error.message);
      }
    });

    it('Retorna 201 - Created', async () => {
      const { status } = postEmployee;

      expect(status).to.be.equals(201);
    });

    it('Retorna um atributo id que e um numero', async () => {
      const { body: { id } } = postEmployee;
      expect(typeof id).to.be.equals('number');
    });

    it('Retorna uma mensagem "Cadastrado com sucesso"', async () => {
      const { body: { message } } = postEmployee;
      expect(message).to.be.equals('Cadastrado com sucesso');
    });

    it('Possivel consultar a pessoa criada atraves do id retornado', async () => {
      const { body: { id: postId } } = postEmployee;
      const { body: { id: getId } } = getEmployee;
      expect(postId).to.be.equals(getId);
    });

    it('Essa consulta tambem retornou um atributo addresses com pelo menos um item', async () => {
      const { body: { addresses } } = getEmployee;
      expect(addresses.length).greaterThanOrEqual(1);
    });
  });

  describe('Quando os dados do body nao sao validos', () => {
    let postEmployee;

    before(async () => {
      try {
        postEmployee = await chai.request(app).post('/employees').send({
          firstName: 'Rodrigo',
          lastName: 'Oliveira',
          age: 30,
          street: 'Rua Teste',
          number: 42,
        });
      } catch (error) {
        console.error(error.message);
      }
    });

    it('Retorna 500 - Internal Server Error', async () => {
      const { status } = postEmployee;
      expect(status).equals(500);
    });

    it('Retorna uma mensagem "Ocorreu um erro"', async () => {
      const { body: { message }} = postEmployee;
      expect(message).equals('Ocorreu um erro');
    });
  });
});