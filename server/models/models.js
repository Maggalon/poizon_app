const sequelize = require('../bd')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users',  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING },
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

module.exports = {
    User
}