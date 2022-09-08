const userFullName = ({ firstName, lastName }) => `Hi! My name is ${firstName} ${lastName}`;

const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMiliseconds = 5000) => Math.floor(Math.random() * maxMiliseconds);

// const getUser = (callback) => {
//   const user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russian',
//   };

//   return callback(user);
// };

// console.log(getUser(userFullName));
// console.log(getUser(userNationality));

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russian',
    };

    console.log(callback(user));
  }, delay());
};

getUser(userFullName);
getUser(userNationality);
