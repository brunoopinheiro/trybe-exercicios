const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (arrayStudents, arrayGrades) => arrayStudents.map((student, index) => ({
  name: student, 
  average: arrayGrades[index].reduce((a, c) => a + c) / arrayGrades[index].length
}));

console.log(studentAverage(students, grades));