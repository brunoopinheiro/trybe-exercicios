const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDamage: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max-min) + min);
};

const dragonDamage = () => getRandomInt(15, dragon.strength);

const warriorDamage = () => getRandomInt(warrior.strength, warrior.strength * warrior.weaponDamage);

const mageDamage = () => {
  const mageAction = {
    dmg: 0,
    spentMana: 0,
  }
  if (mage.mana < 15) {
    mageAction.dmg = 'Not enough mana';
  } else {
    mageAction.dmg = getRandomInt(mage.intelligence, mage.intelligence * 2);
    mageAction.spentMana = 15;
  }
  return mageAction;
};

const gameActions = {
  warriorTurn: (warriorDmg) => {
    turnDamage = warriorDmg();
    dragon.healthPoints -= turnDamage;
    warrior.damage = turnDamage;
  },
  mageTurn: (mageDmg) => {
    turnAction = mageDmg();
    dragon.healthPoints -= turnAction.dmg;
    mage.damage = turnAction.dmg;
    mage.mana -= turnAction.spentMana;
  },
  dragonTurn: (dragonDmg) => {
    turnAction = dragonDmg();
    mage.healthPoints -= turnAction;
    warrior.healthPoints -= turnAction;
    dragon.damage = turnAction;
  },
  battleRound: (warrior, mage, dragon) => {
    gameActions.warriorTurn(warrior);
    gameActions.mageTurn(mage);
    gameActions.dragonTurn(dragon);
    console.log(battleMembers);
  }
};

console.log('Round 0');
console.log(battleMembers);
console.log('------------------');
let i = 1;
while (mage.healthPoints > 0 || warrior.healthPoints > 0) {
  console.log(`Round ${i}`);
  gameActions.battleRound(warriorDamage, mageDamage, dragonDamage);
  console.log('------------------');
  i += 1;
  if (dragon.healthPoints <= 0) {
    break;
  }
};
