const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController') 
const checkAuth = require('../middleware/checkAuth')
const userModel = require('../models/User')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads')
    },
    filename: (_,file,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({ storage })

router.post('/registration', userController.registration)
router.post('/login', userController.login)
//router.get('/auth', userController.check)
router.post('/redact/:userId', upload.single('avatar'), userController.updateUser)



module.exports = router