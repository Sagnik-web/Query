const express = require('express')
const { register, login, logout, allUsers, oneUser, deleteUser, deleteSelf, updateUser, updatePassword, forgotPassword, resetPassword, protect } = require('../Controller/userController')
const userRouter = express.Router()


userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/logout',logout)
userRouter.get('/all',protect,allUsers)
userRouter.get('/me',protect,oneUser)
userRouter.delete('/delete/:ID',protect,deleteUser)
userRouter.delete('/deleteSelf',protect,deleteSelf)
userRouter.put('/updateUser/:ID',protect,updateUser)
userRouter.put('/updatePassword',protect, updatePassword)
userRouter.put('/forgotPassword',forgotPassword)
userRouter.put('/resetPassword/:restToken',resetPassword)


module.exports = userRouter