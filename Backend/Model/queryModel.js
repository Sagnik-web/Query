const mongoose = require('mongoose')

const querySchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title Is Required'],
        maxLength:[30, 'Maximum 30 charter Allowed']
    },
    desc:{
        type:String
    },
    img:{
        productID:String,
        img_url:String
    },
    likes:[],
    qusAns:[
        {
            type:mongoose.Types.ObjectId,
            ref:'ans' 
        }
    ],
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Query = mongoose.model('query',querySchema)

module.exports = Query