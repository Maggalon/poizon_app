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
    // const avatarFileName = req.file.originalname;
    // const avatarImagePath = path.join('uploads', avatarFileName);
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
                                     god: god,
                                     avatar: "" });
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

 async updateUser (req, res)  {
  try {
    const user = await User.findById(req.params.userId);
    //console.log(user);
    console.log(req.file);
    if (!user) {
      return res.status(404).json({ message: 'Юзер не залогинен' });
    }

    user.name = req.body.name || user.name;
    user.phone = req.body.phone || user.phone;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.cardNumber = req.body.cardNumber || user.cardNumber;
    user.god = req.body.god || user.god;
    user.avatar = `http://192.168.0.106:1000/${req.file.filename}` || user.avatar;

    await user.save();

    res.json({ message: 'все, поменял, красава', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'пизда в пути' });
  }
};

}

module.exports = new UserController();