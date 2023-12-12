const hqdModel = require('../models/Hqd')
const Multer = require('multer')
const {fileUrlToPath} = require('url')

class HqdController {
    async registration(req, res) {
        const {name,file, disc,rating} = req.body
        const hqd = new hqdModel({ name,disc,rating});
        const avatarFileName = req.body.avatarFileName;
        const avatarImagePath = path.join('uploads', avatarFileName);
        hqd.file = avatarImagePath
        
        await hqd.save()


        return res.json(hqd);

      }
}

module.exports = new HqdController