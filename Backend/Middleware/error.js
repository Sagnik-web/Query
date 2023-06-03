const ErrorHandeler = require('../utils/ErrorHandeler')

module.exports = (err,req,res,next) =>{
    req.statusCode = req.statusCode || 500
    req.message = req.message || "Server Error"

    // console.log(message);
    res.status(req.statusCode).json({
        success:false,
        msg:req.message
    })
}