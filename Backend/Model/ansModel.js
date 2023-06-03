const mongoose = require('mongoose')

const ansSchema = mongoose.Schema({
    answeredBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:[true,'Title Is Required'],
        maxLength:[30, 'Maximum 30 charter Allowed']
    },
    desc:String,
    img_productID:String,
    img_url:String,
    likes:[],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Ans = mongoose.model('ans',ansSchema)

module.exports = Ans