const ancestries = {
  human: { 
    size: 'medium',
    darkvision: false,
  },
  elf: {
    size: 'medium',
    darkvision: true,
  },
  dwarf: {
    size: 'small',
    darkvision: true,
  },
  halfling: {
    size: 'small',
    darkvision: false,
  },
  orc: {
    size: 'medium',
    darkvision: true,
  },
  gnome: {
    size: 'small',
    darkvision: true
  },
  halfElf: {
    size: 'medium',
    darkvision: true
  },
  tiefling: {
    size:'medium',
    darkvision: true,
  },
  dragonborn: {
    size: 'medium',
    darkvision: true,
  }
};

const abilityScores = {
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
};

const classes = {
  barbarian: {
    type: 'martial',
    hitDice: 12,
    attacksWith: [abilityScores.strength, abilityScores.dexterity],
    proficiencies: {
      armor: ['light', 'medium', 'shield'],
      weapons: ['simple', 'martial'],
      tools: [],
      savingThrows: [abilityScores.strength, abilityScores.constitution]
    },
  },
  bard: {
    type: 'magical',
    hitDice: 8,
    attacksWith: [abilityScores.dexterity, abilityScores.charisma],
    proficiencies: {
      armor: ['light'],
      weapons: ['simple', 'hand crossbow', 'longsword', 'rapier', 'shortsword'],
      tools: ['musical instrument'],
      savingThrows: [abilityScores.dexterity, abilityScores.charisma]
    },
  },
  cleric: {
    type: 'magical',
    hitDice: 8,
    attacksWith: [abilityScores.strength, abilityScores.wisdom],
    proficiencies: {
      armor: ['light', 'medium', 'shield'],
      weapons: ['simple'],
      tools: [],
      savingThrows: [abilityScores.wisdom, abilityScores.charisma]
    },
  },
  druid: {
    type: 'magical',
    hitDice: 8,
    attacksWith: [abilityScores.dexterity, abilityScores.wisdom],
    proficiencies: {
      armor: ['light', 'medium', 'shield'],
      weapons: ['simple'],
      tools: ['herbalism kit'],
      savingThrows: [abilityScores.intelligence, abilityScores.wisdom]
    },
  },
  fighter: {
    type: 'martial',
    hitDice: 10,
    attacksWith: [abilityScores.strength, abilityScores.dexterity],
    proficiencies: {
      armor: ['light', 'medium', 'heavy', 'shield'],
      weapons: ['simple', 'martial'],
      tools: [],
      savingThrows: [abilityScores.strength, abilityScores.constitution]
    },
  },
  monk: {
    type: 'martial',
    hitDice: 8,
    attacksWith: [abilityScores.dexterity],
    proficiencies: {
      armor: [],
      weapons: ['simple', 'shortsword', 'unnarmed'],
      tools: [],
      savingThrows: [abilityScores.strength, abilityScores.dexterity]
    },
  },
  paladin: {
    type: 'martial',
    hitDice: 10,
    attacksWith: [abilityScores.strength, abilityScores.charisma],
    proficiencies: {
      armor: ['light', 'medium', 'heavy', 'shield'],
      weapons: ['simple', 'martial'],
      tools: [],
      savingThrows: [abilityScores.wisdom, abilityScores.charisma]
    },
  },
  ranger: {
    type: 'martial',
    hitDice: 10,
    attacksWith: [abilityScores.dexterity, abilityScores.wisdom],
    proficiencies: {
      armor: ['light', 'medium', 'shield'],
      weapons: ['simple', 'martial'],
      tools: [],
      savingThrows: [abilityScores.strength, abilityScores.dexterity]
    },
  },
  rogue: {
    type: 'martial',
    hitDice: 8,
    attacksWith: [abilityScores.dexterity],
    proficiencies: {
      armor: ['light'],
      weapons: ['simple', 'rapier'],
      tools: ["thieves' tools"],
      savingThrows: [abilityScores.dexterity, abilityScores.intelligence]
    },
  },
  sorcerer: {
    type: 'magical',
    hitDice: 6,
    attacksWith: [abilityScores.dexterity, abilityScores.charisma],
    proficiencies: {
      armor: [],
      weapons: ['simple'],
      tools: [],
      savingThrows: [abilityScores.constitution, abilityScores.charisma]
    },
  },
  warlock: {
    type: 'magical',
    hitDice: 8,
    attacksWith: [abilityScores.dexterity, abilityScores.charisma],
    proficiencies: {
      armor: ['light'],
      weapons: ['simple'],
      tools: [],
      savingThrows: [abilityScores.wisdom, abilityScores.charisma]
    },
  },
  wizard: {
    type: 'magical',
    hitDice: 6,
    attacksWith: [abilityScores.dexterity, abilityScores.intelligence],
    proficiencies: {
      armor: [],
      weapons: ['simple'],
      tools: [],
      savingThrows: [abilityScores.intelligence, abilityScores.wisdom]
    },
  },
}
