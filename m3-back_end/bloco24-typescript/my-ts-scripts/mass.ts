import readline from 'readline-sync';

interface references {
  quilograma: number,
  hectograma: number,
  decagrama: number,
  grama: number,
  decigrama: number,
  centigrama: number,
  miligrama: number,
}
const baseReference: references = {
  quilograma: 1000,
  hectograma: 100,
  decagrama: 10,
  grama: 1,
  decigrama: 0.1,
  centigrama: 0.01,
  miligrama: 0.001,
}

function convert(valor: number, baseUnd: string, convertUnd: string): number {
  return (valor * baseReference[baseUnd.toLowerCase() as keyof references]) / baseReference[convertUnd.toLowerCase() as keyof references];
}

function exec() {
  const undList: string[] = Object.keys(baseReference);
  const value: number = readline.questionFloat('Digite o valor a ser convertido: \n');
  const baseUndIndex: number = readline.keyInSelect(undList, 'Escolha um numero para a unidade base:');
  const convertUndIndex: number = readline.keyInSelect(undList, 'Escolha um número para a unidade de conversão:');

  const baseUnd = undList[baseUndIndex];
  const convertUnd = undList[convertUndIndex];

  if (!baseUnd || !convertUnd) {
    console.log('Função cancelada');
    return 0;
  }

  const result = convert(value, baseUnd, convertUnd);

  const message = `${value} ${baseUnd}s é igual a ${result} ${convertUnd}s`;
  console.log(message);
}

exec();

