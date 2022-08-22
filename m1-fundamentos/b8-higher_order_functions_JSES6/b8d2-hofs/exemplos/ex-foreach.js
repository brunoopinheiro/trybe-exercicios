const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'Jose', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 60) {
      students[index].approved = 'Aprovado';
    } else {
      students[index].approved = 'Recuperacao';
    }
  });
}

verifyGrades();
console.log(students);
