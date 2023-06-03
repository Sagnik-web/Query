const catchAsyncError = require("../Middleware/catchAsyncError");
const Query = require("../Model/queryModel");
const ErrorHandeler = require("../utils/ErrorHandeler");

// Craete Queston --User
exports.createQuestion = catchAsyncError(async(req,res,next)=>{
    req.body.createdBy = req.user._id
    const query = await Query.create(req.body)
    res.status(200).json({
        success:true,
        msg:"Successfully Posted Question",
        query
    })
})


// Get All Question 
exports.getQuestions = catchAsyncError(async(req,res,next)=>{
    const query = await Query.find()

    res.status(200).json({
        success:true,
        msg:"Successfully Get Query Data",
        query
    })
})


//Get One User
exports.getOneQuestion = catchAsyncError(async(req,res,next)=>{
    const {ID} = req.params
    const query = await Query.findById(ID)

    if(!query){
        return next(new ErrorHandeler('Question Is not Found',401))
    }

    res.status(200).json({
        success:true,
        msg:"Questions get Successfully",
        query
    })
})

//Get Own Questions
exports.getOwnQuestions =catchAsyncError( async(req,res,next)=>{
    console.log(req.user);
    const questions = await Query.find({createdBy:req.user._id})

    if(!questions){
        return next(new ErrorHandeler('Question Is not Found',401))
    }

    res.status(200).json({
        success:true,
        msg:"Questions get Successfully",
        questions
    })
})



// Update Questions
exports.updateQuestions = catchAsyncError(async(req,res,next)=>{
    const {ID} = req.params
    const query = await Query.findById(ID)

    if(!query){
        return next(new ErrorHandeler('Questions Not Found',401))
    }

    const queryUpd = await Query.findByIdAndUpdate(ID,req.body,{
        new:true,
        runValidators:true
    })
    
    if(!queryUpd){
        return next(new ErrorHandeler('Update is not done Yet',401))
    }

    res.status(200).json({
        success:true,
        msg:'Successfully Updated Question'
    })
})


// Update Questions Own
exports.updateOwnQuestions = catchAsyncError(async(req,res,next)=>{
    const questions = await Query.find({createdBy:req.user._id})

    if(!questions){
        return next(new ErrorHandeler('Question Is not Found',401))
    }

    const {ID} = req.params
    const viewQuestions = questions.forEach(item=> item._id === ID)
    if(viewQuestions){
        return next(new ErrorHandeler("Quesetion is not found"))
    }
    
    const queryUpd = await Query.findByIdAndUpdate(ID,req.body,{
        new:true,
        runValidators:true
    })
    
    if(!queryUpd){
        return next(new ErrorHandeler('Update is not done Yet',401))
    }

    res.status(200).json({
        success:true,
        msg:'Successfully Updated Question'
    })
})


//Delete Question Own
exports.deleteOwnQuestion =catchAsyncError(async(req,res,next)=>{
    const questions = await Query.find({createdBy:req.user._id})

    if(!questions){
        return next(new ErrorHandeler('Question Is not Found',401))
    }

    const {ID} = req.params
    const viewQuestions = questions.forEach(item=> item._id === ID)
    if(viewQuestions){
        return next(new ErrorHandeler("Quesetion is not found"))
    }
     
    await Query.findByIdAndDelete(ID)
    res.status(200).json({
        success:true,
        msg:"Question Deleted Successfully."
    })
})


//Delete Questions
exports.deleteQuestion =catchAsyncError(async(req,res,next)=>{
    const {ID} = req.params
    const query = await Query.findById(ID)

    if(!query){
        return next(new ErrorHandeler('Question is Not Found',401))
    }

    await Query.findByIdAndDelete(ID)
    res.status(200).json({
        success:true,
        msg:"Question Deleted Successfully."
    })
})



// Like Question 
exports.likeQuestions = catchAsyncError(async(req,res,next)=>{
    const {ID} = req.params
    const query = await Query.findById(ID)


    if(!query){
        return next(new ErrorHandeler('Question is Not Found',401))
    }

    const {likes} = await Query.findById(ID).select('likes')
    // console.log(likes);
    // const isIncluded = likes.forEach(item=> item._id == req.user._id)
    // console.log(likes.includes(req.user._id));
    if(likes.includes(req.user._id)){
        return next(new ErrorHandeler('Question is Already Liked',401))
    }

    const like = await Query.findByIdAndUpdate(ID,{
        $push:{
            likes:req.user._id
        }
    },{new:true,runValidators:true})

    if(!like){
        return next(new ErrorHandeler('Question is Not Liked yet',401))
    }

    res.status(200).json({
        success:true,
        msg:"Successfully Liked the Question."
    })
})


// Unlink Question
exports.unlikeQuestion = catchAsyncError(async(req,res,next)=>{
    const {ID} = req.params
    const query = await Query.findById(ID)

    if(!query){
        return next(new ErrorHandeler('Question is Not Found',401))
    }

    const {likes} = await Query.findById(ID).select('likes')
    // console.log(likes);
    // const isIncluded = likes.forEach(item=> item._id == req.user._id)
    // console.log(likes.includes(req.user._id));
    if(!likes.includes(req.user._id)){
        return next(new ErrorHandeler('Question is Not Liked',401))
    }

    const like = await Query.findByIdAndUpdate(ID,{
        $pull:{
            likes:req.user._id
        }
    },{new:true,runValidators:true})

    if(!like){
        return next(new ErrorHandeler('Question is Not Unliked yet',401))
    }

    res.status(200).json({
        success:true,
        msg:"Successfully Unliked the Question."
    })
})


// Answer Post 
// exports.postAnswer = catchAsyncError(async(req,res,next)=>{
//     const {title,desc,img} = req.body
//     const {ID} = req.params

//     const answer = {
//         name:req.user.name,
//         title:title,
//         desc:desc,
//         img:img,
//     }
//     // console.log(answer);
//     const query = await Query.findById(ID)
//     if(!query){
//         return next(new ErrorHandeler("No Question Found",400))
//     }
//     // console.log(query);

//     const updAns = await Query.findByIdAndUpdate(ID,{
//         $push:{
//             ans:answer
//         }
//     },{new:true,runValidators:true})
    

//     if(!updAns){
//         return next(new ErrorHandeler('Update is done Successfully.',400))
//     }


//     res.status(200).json({
//         success:true,
//         msg:"Ans Posted Successfully."
//     })
// })


// Answer Like
// exports.ansLike = catchAsyncError(async(req,res,next)=>{
//     const {ID} = req.params
//     const query = await Query.findOne({"_id":"6256594df28df89fa159cb7b"},{"ans._id":"62565a69f17988991b53d810"}).select('ans.name ans.img_url ans.img_productID ans.likes ans.createdAt ans.title')

//     if(!query){
//         return next(new ErrorHandeler('Question is Not Found',401))
//     }

//     console.log(query);
    
//     res.status(200).json({
//         answer:query
//     })
    
// })