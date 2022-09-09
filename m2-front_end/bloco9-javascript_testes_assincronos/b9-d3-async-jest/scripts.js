// commonJS
// const fetch = require('node-fetch');

const getUserGit = (user) => `https://api.github.com/users/${user}`;

const getUserInfo = async (username) => {
  const url = getUserGit(username);
  const result = await fetch(url);
  const data = await result.json();
  const { name, bio, location, company } = data;

  return {
    name,
    bio,
    location,
    company,
  };
};

// getUserInfo('thiagobraddock').then(console.log);
module.exports = { getUserGit, getUserInfo };
