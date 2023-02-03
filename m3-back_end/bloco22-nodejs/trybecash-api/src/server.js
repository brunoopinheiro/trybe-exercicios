require('dotenv').config();
const app = require('./app');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`A API TrybeCash está sendo executada na porta ${PORT}`);
  console.log(`Valor da variavel de ambiente $USER: ${process.env.USER}`);
});
