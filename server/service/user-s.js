const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

class UserService {
    async getOne(id) {
        const getOne = await User.findOne(id)
        return getOne
    }
    
}

module.exports = new UserService()