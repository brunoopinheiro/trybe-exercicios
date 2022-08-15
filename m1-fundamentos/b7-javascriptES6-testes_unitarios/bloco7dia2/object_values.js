const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Otimo',
  SoftSkills: 'Otimo',
};

const student2 = {
  Html: 'Bom',
  CSS: 'Otimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Otimo',
  Git: 'Bom',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for (skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = student => Object.values(student);

console.log(listSkillsValuesWithFor(student1));
console.log(listSkillsValuesWithValues(student1));
