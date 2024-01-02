const {Schema, model, trusted} = require('mongoose')
const { INET, INTEGER } = require('sequelize')
const mongoose = require('mongoose');


const HqdShema = new Schema({
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
        type: Number
    },
    category: {
        type: String
    },
    gender: {
        type: String
    }
})

module.exports = model('Hqd', HqdShema) 