const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - funcao para adicionar turno da noite na lesson2. Deve possuir 3 parametros (objeto, chave, valor)
function addToObject(object, keyName, keyValue) {
  object[keyName] = keyValue;
}

addToObject(lesson2, 'turno', 'noite');

// 2 - funcao para listar keys do objeto. 1 parametro (objeto)
const listKeys = object => Object.keys(object);

// 3 - funcao para mostrar tamanho de um objeto. 1 parametro (objeto)
function objectLength(object) {
  const keys = listKeys(object);
  return keys.length;
}

// 4 - funcao para listar valores de um objeto. 1 parametro (objeto)
const listValues = object => Object.values(object);

// objeto `allLessons` agrupar todas as aulas atraves de Object.assign.
const allLessons = Object.assign({lesson1, lesson2, lesson3});

// usando allLessons, funcao que retorne total de estudantes em todas as aulas.
function totalEstudantes(object) {
  const lessons = Object.entries(object);
  let total = 0;
  for (let i = 0; i < lessons.length; i += 1) {
    let numeroEstudantes = Object.values(lessons[i][1]);
    numeroEstudantes = numeroEstudantes[1];
    total += numeroEstudantes;
  }
  return total;
}

// funcao que obtenha valor da chave de acordo com seu indice no objeto
function getValueByNumber(object, number) {
  const keys = Object.keys(object);
  const key = keys[number];
  const value = object[key];
  return value;
}

// funcao que verifique se o par chave/valor existe no objeto. 3 parametros (objeto, nome da chave, valor da chave)
function verifyPair(object, key, value) {
  const keysList = Object.keys(object);
  const values = Object.values(object);
  if (keysList.includes(key) && values.includes(value)) {
    if (object[key] === value) {
      return true
    } else {
      return false;
    }
  } else {
    return false;
  } 
}

// b1 - funcao para contar quantos estudantes assistiram as aulas de matematica, usando allLessons.
function countClassAttendance(materia) {
  const allLength = objectLength(allLessons);
  const lessons = listKeys(allLessons);
  let totalAlunos = 0;
  for (let i = 0; i < allLength; i += 1) {
    const lessonValues = Object.values(allLessons[lessons[i]]);
    if (lessonValues.includes(materia)) {
      const estudantes = allLessons[lessons[i]].numeroEstudantes;
      totalAlunos += estudantes;
    }
  }
  return totalAlunos;
}

// b2 - funcao retornar objeto representando relatorio do professor(a), aulas ministradas e numero total de estudantes
function createReport(object, nomeProfessor) {
  const aulasArray = [];
  let totalEstudantes = 0;

  for (let lesson in object) {
    const le = object[lesson];
    if (Object.values(le).includes(nomeProfessor)) {
      aulasArray.push(le.materia);
      totalEstudantes += le.numeroEstudantes;
    }
  }
  const report = {
    professor: nomeProfessor,
    aulas: aulasArray,
    estudantes: totalEstudantes,
  };

  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
