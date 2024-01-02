const categoryM = require('../models/Category');
const Multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const modelGen = require('../models/Genger')

class CategoryController {
    async registration(req, res) {
        try {
            const { name, file,gender } = req.body;

            const avatarFileName = req.file.originalname;
            const avatarImagePath = path.join('uploads', avatarFileName);

            

            const category = new categoryM({ name: name, genderCategory: gender, file: avatarFileName });

            await category.save();

            return res.json(category);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new CategoryController();
