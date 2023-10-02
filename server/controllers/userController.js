const bcrypt = require('bcrypt');
const { User } = require('../models/models');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, { expiresIn: '24h' });
};

class UserController {
  async registration(req, res) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res.json({ message: 'пустые email or password' });
    }
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return res.json({ message: 'такое мыло уже есть' });
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.json({ message: 'такого пользователя нет' });
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res.json({ message: 'password некоректный' });
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async check(req, res) {
    res.json({ message: 'asd' });
  }
}

module.exports = new UserController();
