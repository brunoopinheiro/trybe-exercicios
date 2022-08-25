const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// const filterPeople = (filterNat, peopleArr) => peopleArr.filter((person) => {
//   const { bornIn, nationality } = person;
//   if (bornIn > 1900 && bornIn < 2001 && nationality === filterNat) return person;
// });

const filterPeople = (filterNat, peopleArr) => peopleArr.filter(({ bornIn, nationality}) => (bornIn > 1900 && bornIn < 2001 && nationality === filterNat));

console.log(filterPeople('Australian', people));
