const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
//const hqdRouter = require('./hqdRouter')
//const typeRouter = require('./typeRouter')

router.use('/user', userRouter )
//router.use('/type', typeRouter)
//outer.use('/hqd', hqdRouter)


module.exports = router