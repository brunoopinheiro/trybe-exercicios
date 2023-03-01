const userBookService = require('../services/userBook.service');

const getUsersBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userBookService.getUsersBooksById(id);

    if (!user) return res.status(404).json({ message: 'Pessoa nao encontrada' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getUsersBooksById,
}