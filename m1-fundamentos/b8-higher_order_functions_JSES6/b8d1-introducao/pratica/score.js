const assertScore = (arr1, arr2) => {
  let score = 0;
  for (let i = 0; i< arr1.length; i += 1) {
    if (arr1[i] === arr2[i]) {
      score += 1;
    } else if (arr2[i] !== 'N.A') {
      score -= 0.5;
    }
  }
  return score;
}

const assertGrade = (correct, student, assertMethod) => assertMethod(correct, student);

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(assertGrade(RIGHT_ANSWERS, STUDENT_ANSWERS, assertScore));
