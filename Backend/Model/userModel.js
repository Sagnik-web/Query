const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is Required']
    },
    email:{
        type:String,
        required:[true,'Email is Required'],
        unique:[true,'Email must be Unique'],
        validate:[validator.isEmail, 'Your Email is not valid']
    },
    password:{
        type:String,
        required:[true,'Password is Required'],
        minLength:[8,'Password Charector mast be more than 8 charecter.']
    },
    img:{
        img_publicID:String,
        img_url:String
    },
    role:{
        type:String,
        enum:['user','Admin'],
        default:'user'
    },
    forgotResetToken:String,
    expForgotResetToken:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next()
    }

    this.password = await bcrypt.hash(this.password,12)
    next()
})

userSchema.methods.comparePassword =async function(currentPassword){
    // console.log(await bcrypt.compare(this.password, currentPassword));
    return await bcrypt.compare(currentPassword,this.password)
}

userSchema.methods.getJWT = function(){
    const token = jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXP
    })
    return token
}

userSchema.methods.setResetToken = function(){
    const cryptoStr = crypto.randomBytes(20).toString('hex')
    this.forgotResetToken = crypto.createHash('sha256').update(cryptoStr).digest('hex')
    this.expForgotResetToken = Date.now() + 15 * 60 * 1000
    return cryptoStr
}


const User = mongoose.model('user',userSchema)

module.exports = User