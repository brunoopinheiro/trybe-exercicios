function validationMessage(descriptionValue, res, value) {
  if (!descriptionValue) {
    return res.status(400).json({ message: `O campo ${value} é obrigatório` });
  }
}

function validateDate(dateValue, res, value) {
  const isFormatDate = /^([0-2][0-9]|(3)[0-1](\/)((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!isFormatDate.test(dateValue)) {
    return res.status(400).json({ message: `O campo ${value} deve ter o fomato 'dd/mm/aaa'` });
  }
}

function validRating(rating, res) {
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({
       message: 'O campo "rating" deve ser um número inteiro entre 1 e 5',
    });
  }
}

function validDifficulty(difficulty, res) {
  const classifications = ['Fácil', 'Médio', 'Difícil'];

  if (!classifications.includes(difficulty)) {
    return res.status(400).json({
      message: 'O campo "difficulty" deve ser "Fácil", "Médio" ou "Difícil" ',
    });
  }
}

function validateDescription(req, res, next) {
  const { description } = req.body;
  
  return validationMessage(description, res, 'description')
    || validateDate(description.createdAt, res, 'createdAt')
    || validRating(description.rating, res)
    || validDifficulty(description.difficulty, res)
    || next();
}

module.exports = validateDescription;
