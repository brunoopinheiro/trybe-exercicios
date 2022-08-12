const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Nao devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} otimo, fui utilizada no meu escopo`;
    console.log(ifScope);
  } else {
    const elseScope = 'Nao devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);
testingScope(false);
