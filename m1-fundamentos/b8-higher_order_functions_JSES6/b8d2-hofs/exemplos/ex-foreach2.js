const arrayOfValues = ['jose', 50, 0.25, { comida: 'Chocolate'}];

arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posicao do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
})
