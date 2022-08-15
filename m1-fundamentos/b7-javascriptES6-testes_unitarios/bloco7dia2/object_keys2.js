const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Otimo',
  SoftSkills: 'Otimo',
}

const student2 = {
  Html: 'Bom',
  CSS: 'Otimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Otimo',
  Git: 'Bom',
}

// Resposta do exercicio - Gabarito
const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(`${arrayOfSkills[index]}, Nivel: ${student[arrayOfSkills[index]]}`);
  }
}

// Resposta do Exercicio - pessoal
const ssValid = object => {
  if (typeof object !== 'object') {
    throw new Error ('Entrada invalida do parametro Object.');
  }
}

function studentSkills(object) {
  try {
    ssValid(object);
    const skills = Object.keys(object);
    for (let i = 0; i < skills.length; i += 1) {
      const skill = skills[i];
      console.log(`${skill}, Nivel: ${object[skill]}`);
    }
  } catch (e) {
    console.log(e.message);;
  }
}

studentSkills(student2);
