const sendToken = require("../Cookies/sendCookie");
const catchAsyncError = require("../Middleware/catchAsyncError");
const User = require("../Model/userModel");
const ErrorHandeler = require("../utils/ErrorHandeler");
const jwt = require('jsonwebtoken');
const sendEmail = require("../Email/sendEmail");
const crypto = require('crypto')

// Register -- User
exports.register = catchAsyncError(async(req,res,next)=>{
    const user = await User.create(req.body)
    res.status(200).json({
        success:true,
        user
    })
})


// Login -- User 
exports.login = catchAsyncError(async(req,res,next)=>{
    const {email,password} = req.body
    if(!email || !password){
        return next(new ErrorHandeler('Email or Password is not Found',400))
    }

    const user = await User.findOne({email:email}).select('+password')
    if(!user){
        return next(new ErrorHandeler('User is Not Found',400))
    }
    // console.log(user);
    const checkPass = await user.comparePassword(password)
    // console.log(checkPass);
    if(!checkPass){
        return next(new ErrorHandeler('Password Missmatch',400))
    }

    sendToken(user,200,res)
    
})


// Protect
exports.protect = catchAsyncError(async(req,res,next)=>{
    const {ecomAuth} = req.cookies

    // console.log(ecomAuth);
    if(!ecomAuth){
        return next(new ErrorHandeler('Token is Not Found',400))
    }

    const jwtDecode = await jwt.verify(ecomAuth, process.env.JWT_SECRET)
    if(!jwtDecode){
        return next(new ErrorHandeler('JWT Decode ID not Found', 400))
    }
    // console.log(jwtDecode);

    const user = await User.findById(jwtDecode.id)
    if(!user){
        return next(new ErrorHandeler('User is not Found',400))
    }


    req.user = user
    next()

})


// Logout
exports.logout = catchAsyncError(async(req,res,next)=>{
    res.cookie('ecomAuth',null).status(200).json({
        success:true,
        msg:"Successfully Logged out."
    })
})


// All User -- Admin
exports.allUsers = catchAsyncError(async(req,res,next)=>{
    const user = await User.find()
    res.status(200).json({
        success:true,
        msg:"Successfully Get All User",
        user
    })
})


// One User -- User/me
exports.oneUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user._id)
    res.status(200).json({
        success:true,
        msg:"Successfully Get User Data",
        user
    })
})


// Delete User Data --Admin
exports.deleteUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.ID)
    if(!user){
        return next(new ErrorHandeler('User Not Found',400))
    }

    await User.findByIdAndDelete(req.params.ID)
    res.status(200).json({
        success:true,
        msg:"Successfully Get User Data",
    })    
})


// Delete User self --User
exports.deleteSelf = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user._id)
    if(!user){
        return next(new ErrorHandeler('User Not Found',400))
    }

    await User.findByIdAndDelete(req.user._id)
    res.status(200).json({
        success:true,
        msg:"Successfully Get User Data",

    })    
})


// Update User --Admin
exports.updateUser = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.params.ID)
    if(!user){
        return next(new ErrorHandeler('User Not Found',400))
    }
    
    const updatedUse = await User.findByIdAndUpdate(req.params.ID,req.body,{new:true,runValidators:true})
    if(!updatedUse){
        return next(new ErrorHandeler('User is not updated successfully.',400))
    }

    res.status(200).json({
        success:true,
        msg:"User updated successfully"
    })
})


// Password Update --User
exports.updatePassword = catchAsyncError(async(req,res,next)=>{
    const {oldPassword, newPassword} = req.body
    if(!oldPassword || !newPassword){
        return next(new ErrorHandeler('Old or New Password is not found',400))
    }

    const user = await User.findById(req.user._id).select('+password')
    if(!user){
        return next(new ErrorHandeler('User is not found',400))
    }

    const check = await user.comparePassword(oldPassword)
    if(!check){
        return next(new ErrorHandeler('Password Mish Match',400))
    }

    user.password = newPassword
    await user.save()

    res.status(200).json({
        success:true,
        msg:'Password Updated Successfully.'
    })
})


//Restrict Role 

// Forgot Password --User
exports.forgotPassword = catchAsyncError(async(req,res,next)=>{
    const {email} = req.body
    if(!email){
        return next(new ErrorHandeler('Email Is Not Found',400))
    }

    const user = await User.findOne({email:email})
    if(!user){
        return next(new ErrorHandeler('User Not Found', 400))
    }

    const resetToken = await user.setResetToken() 
    const message = `Your reset token url \n ${req.protocal}://localhost:3000/api/v1/resetToken/${resetToken} \n From company`
    const subject = 'Reset Token from Abc.ltd'

    try{
        await sendEmail({
            email:email,
            subject:subject,
            message:message
        })

        res.status(200).json({
            success:true,
            msg:"Email Send to your Email Address."
        })
    }catch(err){
        res.status(400).json({
            success:false,
            msg:`Error: ${err}`
        })
    }


})

// Reset Password --User
exports.resetPassword = catchAsyncError(async(req,res,next)=>{
    const {resetToken} = req.params
    if(!resetToken){
        return next(new ErrorHandeler('Reset Token is not found', 400))
    }

    const enpToken = await crypto.createHash('sha256').update(resetToken).digest('hex')
    const user = await User.findOne({forgotResetToken:enpToken, expForgotResetToken: {$gt:Date.now()}})
    if(!user){
        return next(new ErrorHandeler('User Not Found', 400))
    } 

    const {password} = req.body
    if(!password){
        return next(new ErrorHandeler('Password Not Found',400))
    }

    user.password = password
    user.forgotResetToken = undefined
    user.expForgotResetToken = undefined
    user.save()

    res.status(200).json({
        success:true,
        msg:"Successfully Change the Password"
    })
})