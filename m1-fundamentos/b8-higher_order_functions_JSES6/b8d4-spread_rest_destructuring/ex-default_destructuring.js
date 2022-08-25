const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = { firstName: 'Joao', lastName: 'Jr II' };
const otherPerson = { firstName: 'Ivan', lastName: 'Ivanovich', nationality: 'Russian' };

console.log(getNationality(otherPerson));
console.log(getNationality(person));
