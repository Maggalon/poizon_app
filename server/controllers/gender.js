const genderM = require('../models/Genger');
const Multer = require('multer');
const path = require('path');

class GenderController {
    async registration(req, res) {
        try {
            const { name,gendecyka, file } = req.body;

            const avatarFileName = req.file.originalname;
            const avatarImagePath = path.join('uploads', avatarFileName);

            const gender = new genderM({ name: name, gender: gendecyka, file: avatarImagePath });

            await gender.save();

            return res.json(gender);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new GenderController();
