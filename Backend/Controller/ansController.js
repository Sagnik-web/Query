const catchAsyncError = require("../Middleware/catchAsyncError");
const Ans = require("../Model/ansModel");
const Query = require("../Model/queryModel");
const ErrorHandeler = require("../utils/ErrorHandeler");

exports.ownAns = catchAsyncError(async(req,res,next)=>{
    const ownAns = await Ans.find({answeredBy:req.user._id})
    if(!ownAns){
        return next(new ErrorHandeler('You have not Answerd Yet',401))
    }
    // console.log(ownAns);

    res.status(200).json({
        success:true,
        msg:"Ans Found Successfully",
        ans:ownAns
    })
})

exports.postAns = catchAsyncError(async(req,res,next)=>{
    req.body.answeredBy = req.user._id
    const answer = await Ans.create(req.body)
    if(!answer){
        return next(new ErrorHandeler('Answer Posted Successfully',401))
    }

    // console.log(answer._id);
    const {ID} = req.params
    const ansPost = await Query.findByIdAndUpdate(ID,{
        $push:{
            qusAns:answer._id
        }
    },{new:true,runValidators:true})

    // console.log(ansPost);
    if(!ansPost){
        return next(new ErrorHandeler('Answer Added Successfully',401))
    }
    

    res.status(200).json({
        success:true,
        msg:"Answer Posted Successfully.",
        ansPost
    })
})


exports.updateAns = catchAsyncError(async(req,res,next)=>{
    const {AnsID} = req.params
    const ans = await Ans.findById(AnsID)
    if(!ans){
        return next(new ErrorHandeler("Ans is nou Found",401))
    }

    const updtAns = await Ans.findByIdAndUpdate(AnsID,req.body,{new:true,runValidators:true})
    if(!updtAns){
        return next(new ErrorHandeler("Ans is not Updated",401))
    }

    res.status(200).json({
        success:true,
        msg:'Ans is Updated Successfully'

    })
})



exports.deleteAns = catchAsyncError(async(req,res,next)=>{
    const {AnsID,ID} = req.params
    const {qusAns} = await Query.findById(ID).select('qusAns')

    // const isInclude = ans.forEach(el => el._id == );
    if(!qusAns.includes(AnsID)){
        return next(new ErrorHandeler('Ans Id is not found',401))
    }


    const updtQues = await Query.findByIdAndUpdate(ID,{
        $pull:{
            qusAns:AnsID
        }
    },{new:true,runValidators:true})

    if(!updtQues){
        return next(new ErrorHandeler('Qustion Ans is not updated',401))
    }

    await Ans.findByIdAndDelete(AnsID)
    res.status(200).json({
        success:true,
        msg:"Successfully Deleted Answer"
    })
})


exports.deleteOwnAns = catchAsyncError(async(req,res,next)=>{
    const ownAns = await Ans.find({answeredBy:req.user._id})
    const {AnsID,ID} = req.params

    if(!ownAns){
        return next(new ErrorHandeler('You have not Answerd Yet',401))
    }

    const ansArr = []
    ownAns.map(el => ansArr.push((el._id).toString()))

    // console.log(AnsID);
    if(!ansArr.includes(AnsID.toString())){
        return next(new ErrorHandeler('Your Are not allowed to change Others Ans.',401))
    }
    const {qusAns} = await Query.findById(ID).select('qusAns')

    // const isInclude = ans.forEach(el => el._id == );
    if(!qusAns.includes(AnsID)){
        return next(new ErrorHandeler('Ans Id is not found',401))
    }


    const updtQues = await Query.findByIdAndUpdate(ID,{
        $pull:{
            qusAns:AnsID
        }
    },{new:true,runValidators:true})

    if(!updtQues){
        return next(new ErrorHandeler('Qustion Ans is not updated',401))
    }

    await Ans.findByIdAndDelete(AnsID)
    res.status(200).json({
        success:true,
        msg:"Successfully Deleted Answer"
    })
})


// Like Question 
exports.likeAns = catchAsyncError(async(req,res,next)=>{
    const {AnsID} = req.params
    const ans = await Ans.findById(AnsID)


    if(!ans){
        return next(new ErrorHandeler('Answer is Not Found',401))
    }

    const {likes} = await Ans.findById(AnsID).select('likes')
    // console.log(likes);
    // const isIncluded = likes.forEach(item=> item._id == req.user._id)
    // console.log(likes.includes(req.user._id));
    if(likes.includes(req.user._id)){
        return next(new ErrorHandeler('Answer is Already Liked',401))
    }

    const like = await Ans.findByIdAndUpdate(AnsID,{
        $push:{
            likes:req.user._id
        }
    },{new:true,runValidators:true})

    if(!like){
        return next(new ErrorHandeler('Answer is Not Liked yet',401))
    }

    res.status(200).json({
        success:true,
        msg:"Successfully Liked the Answer."
    })
})


// Unlink Question
exports.unlikeAns = catchAsyncError(async(req,res,next)=>{
    const {AnsID} = req.params
    const ans = await Ans.findById(AnsID)

    if(!ans){
        return next(new ErrorHandeler('Answer is Not Found',401))
    }

    const {likes} = await Ans.findById(AnsID).select('likes')
    // console.log(likes);
    // const isIncluded = likes.forEach(item=> item._id == req.user._id)
    // console.log(likes.includes(req.user._id));
    if(!likes.includes(req.user._id)){
        return next(new ErrorHandeler('Answer is Not Liked',401))
    }

    const like = await Ans.findByIdAndUpdate(AnsID,{
        $pull:{
            likes:req.user._id
        }
    },{new:true,runValidators:true})

    if(!like){
        return next(new ErrorHandeler('Answer is Not Unliked yet',401))
    }

    res.status(200).json({
        success:true,
        msg:"Successfully Unliked the Answer."
    })
})
