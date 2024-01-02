const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController') 
const checkAuth = require('../middleware/checkAuth')
const userModel = require('../models/User')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
//router.get('/auth', userController.check)




module.exports = router