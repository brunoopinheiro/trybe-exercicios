const createEmail = (fullName) => {
  let name = fullName.toLowerCase();
  name = name.replaceAll(' ', '_');
  const employee = {
    nomeCompleto: fullName,
    email: `${name}@trybe.com`,
  };
  return employee;
}

const newEmployees = () => {
  const employees = {
    id1: createEmail('Pedro Guerra'),
    id2: createEmail('Luiza Drumond'),
    id3: createEmail('Carla Paiva'),
  }

  return employees
}

console.log(newEmployees());
