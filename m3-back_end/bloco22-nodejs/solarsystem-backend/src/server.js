const app = require('./app');
const connection = require('./db/connection');

app.listen(3001, async () => {
  console.log('Back-end rodando na porta 3001');
  const [result] = await connection.execute('SELECT * FROM missions');

  console.log(result);
  // if (result) console.log('MySQL Connect OK!');
});
