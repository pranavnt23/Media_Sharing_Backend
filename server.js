const { adminRouter } = require('./routes/admin.routes')
const { userRouter } = require('./routes/user.route')
const router=require('express').Router()

router.use('/admin',adminRouter)
router.use('/user',userRouter)
module.exports={router}