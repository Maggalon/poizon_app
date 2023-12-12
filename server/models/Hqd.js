const {Schema, model, trusted} = require('mongoose')
const { INET, INTEGER } = require('sequelize')

const UserSchema = new Schema({
    name:{
        type: String
    },
    file: {
        type: String
    },
    discription: {
        type: String
    },
    rating: {
        type: Int32Array
    }
})

module.exports = model('User', UserSchema) 