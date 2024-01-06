const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const userService = require('../service/user-s')

const generateJwt = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_ACCSES_SECRET, { expiresIn: '24h' });
};

class UserController {
  async registration(req, res) {
    const {name, phone, email, password, confirmPassword, cardNumber, god  } = req.body;
    if (!email || !password) {
      return res.json({ message: 'пустые email or password' });
    }
    const candidate = await User.findOne({email});
    if (candidate) {
      return res.json({ message: 'такое мыло уже есть' });
    }
    if (password != confirmPassword) {
      return res.json({message: 'пароли разные'})
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email: email, 
                                     password: hashPassword, 
                                     name: name, 
                                     phone: phone, 
                                     cardNumber: cardNumber,
                                     god: god });
    const token = generateJwt(user.id, user.email, user.password);
    return res.json({ token });
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const id = await User.findById(user)
    const getOne = await userService.getOne(id)
    if (!user) {
      return res.json({ message: 'такого пользователя нет' });
    }
  
    const comparePassword = bcrypt.compareSync(password, user.password);
  
    if (!comparePassword) {
      return res.json({ message: 'password некоректный' });
    }
  
    const token = generateJwt(user.id, user.email, user.phone);
    
  
    return res.json(getOne );
    
    
  }
  

  async getOne(req, res) {
    try {
      const getOne = await userService.getOne(req.params.id);
        return res.json(getOne)
    }

    catch (e) {
        res.json({message: "пропиздон в getOne"})
    }
}
}

module.exports = new UserController();