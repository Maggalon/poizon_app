const {Schema, model, trusted} = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
   
    numberCard: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('User', UserSchema)