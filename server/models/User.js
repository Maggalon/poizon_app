const {Schema, model, trusted} = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
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
   
    cardNumber: {
        type: String,
        required: true,
        unique: true
    },
    god: {
        type: Number
    }
})

module.exports = model('User', UserSchema)