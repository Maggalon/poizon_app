const Router = require('express')
const router = new Router()
const hqd = require('../controllers/hqdController')


router.post('/create',hqd.registration)
router.get('/',)
router.get('/:id',)
//router.get('/getOne/:id', checkAuth, userController.getOne)




module.exports = router