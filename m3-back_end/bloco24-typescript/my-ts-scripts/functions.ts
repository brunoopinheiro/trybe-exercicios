// Função 1
const numberInput: number = 7;

export function isItAPrime (param: number): boolean {
  for (let i = 2; i < param; i+= 1) {
    if (param % i === 0) return false;
  }
  return param > 1;
};

console.log(isItAPrime(numberInput) ? `${numberInput} é primo` : `${numberInput} não é primo`);

// Função 2
const emailInput: string = 'email@email.com';

export function validateEmailFormat (param: string): boolean {
  const reg = /\S+@\S+\.\S+/;
  console.log(typeof reg);
  return reg.test(param);
}

console.log(validateEmailFormat(emailInput));

// Função 3
const numberList: number[] = [10, 5, 18, 2, 8, 23];

export function sortInput (param: number[]): number[] {
  return param.sort(function(a: number, b: number){ return a - b });
}

console.log(sortInput(numberList));

// Função 4
const peopleInput = {
  name: 'Rui',
  age: 23,
}

export function createSimpleSentence (param: { name: string, age: number}): string {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`
}

console.log(createSimpleSentence(peopleInput));

// Função 5
const ageInput: number = 15;

export function isOfLegalAge (param: string | boolean) {
  return !!param;
}

console.log(ageInput >= 18 ? isOfLegalAge('true') : isOfLegalAge(false));
