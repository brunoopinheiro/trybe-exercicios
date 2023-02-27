const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Book = require('./src/controllers/book.controller');

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', Book.getAll);
app.get('/books/:id', Book.getById);
app.post('/books', Book.createBook);
app.put('/books/:id', Book.udpateBook);
app.delete('/books/:id', Book.removeBook);
