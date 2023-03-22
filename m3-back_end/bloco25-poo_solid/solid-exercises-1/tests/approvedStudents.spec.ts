import 'mocha';
import { expect } from 'chai';
import { approvedStudents } from '../src';

const disciplinesDict = {
  mathematics: 'matematica',
  history: 'historia',
};

describe('Testando a funcao "approvedStudents"', function () {
  describe('- Quando todas as notas sao maiores que 0.7', function () {
    it('Retorna true', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.8 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];

      const student = {
        name: 'test',
        disciplines: disciplines,
      };

      const result = approvedStudents(student);

      expect(result).to.be.equal(true);
    });
  });

  describe('- Quando todas as notas sao menores que 0.7', function () {
    it('Retorna false', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.1 },
        { name: disciplinesDict.history, grade: 0.2 },
      ];
      const student = {
        name: 'test',
        disciplines: disciplines,
      };

      const result = approvedStudents(student);

      expect(result).to.be.equal(false);
    });
  });

  describe('- Quando parte das notas sao menores que 0.7', function () {
    it('Retorna false', function () {
      const disciplines = [
        { name: disciplinesDict.mathematics, grade: 0.5 },
        { name: disciplinesDict.history, grade: 0.9 },
      ];
      const student = {
        name: 'test',
        disciplines: disciplines,
      };
      const result = approvedStudents(student);

      expect(result).to.be.equal(false);
    });
  });
});