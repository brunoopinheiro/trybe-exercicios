const { read } = require('fs');
const { readMissionsData } = require('./utils/fsUtils');

async function main() {
  const missions = await readMissionsData();
  console.log(missions);
}

main();
