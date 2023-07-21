const users = require('../utils/users');

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await users.find(user => user.email === email && user.password === password);

    if (user) {
      res.status(200).json({ access: true });
    } else {
      res.status(200).json({ access: false });
    }
  } catch (error) {
    res.status(404).json({ error: 'Error en el servidor' });
  }
};

module.exports = login;