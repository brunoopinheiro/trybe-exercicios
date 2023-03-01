/**
* @param {import('sequelize').Sequelize} sequelize
*/

const { Address, Employee } = require('../models');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuracao correta para nosso ambiente
const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses'},
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    // Eager loading version
    // include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }],
  });

  return employee;
};

const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const t = await sequelize.transaction();
  try {
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // Se chegou ate essa linha, quer dizer que nenhum erro ocorreu
    // Com isso, podemos finalizar a transacao usando a funcao commit
    await t.commit();
    return employee;
  } catch (e) {
    // Se entrou nesse bloco e porque alguma operacao falhou
    // Nesse caso, o sequelize ira reverter as operacoes anteriores com a funcao rollback
    await t.rollback();
    console.log(e);
    throw e; // Jogamos o erro para o controller tratar
  }
};

module.exports = {
  getAll,
  getById,
  insert,
};