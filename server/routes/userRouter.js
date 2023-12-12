const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController') 
const checkAuth = require('../middleware/checkAuth')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
//router.get('/auth', userController.check)
router.get('/getOne',checkAuth, userController.getOne)



module.exports = router