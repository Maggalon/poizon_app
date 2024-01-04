const hqdModel = require('../models/Hqd');
const Multer = require('multer');
const path = require('path');

class HqdController {
    async registration(req, res) {
        try {
            const { name, discription, rating, gender, category ,price} = req.body;

            const avatarFileName = req.file.originalname;
            const avatarImagePath = path.join('uploads', avatarFileName);

            const hqd = new hqdModel({ name, discription: discription, rating, file: avatarImagePath, gender: gender, category: category,price: price });

            await hqd.save();

            return res.json(hqd);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new HqdController();
