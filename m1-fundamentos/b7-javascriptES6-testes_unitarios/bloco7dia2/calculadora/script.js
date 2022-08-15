function testInput(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error ('Valores invalidos.');
  }
}

function sum() {
  const value1 = Number(document.getElementById('value1').value);
  const value2 = Number(document.getElementById('value2').value);
  try {
    testInput(value1, value2);
    const result = value1 + value2;
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (e) {
    document.getElementById('result').innerHTML = `${e.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}