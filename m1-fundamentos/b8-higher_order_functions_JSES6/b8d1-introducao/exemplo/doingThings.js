const wakeUp = () => 'Acordando!';

const coffeTime = () => 'Bora tomar cafe!!';

const sleep = () => 'Partiu dormir!';

const doingThings = (func) => {
  console.log(func);
}

doingThings(wakeUp());
doingThings(coffeTime());
doingThings(sleep());
