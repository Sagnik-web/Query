const nodemiller = require('nodemailer')

const sendEmail =async options =>{
    const mailTeansport = nodemiller.createTransport({
        host:process.env.HOST,
        port:process.env.PORT,
        service:process.env.SERVICE,
        auth:{
            user:process.env.USER,
            pass:process.env.PASS
        }
    })

    const data = {
        from:process.env.USER,
        to:options.email,
        subject:options.subject,
        text:options.message
    }

    await mailTeansport.sendMail(data)
}

module.exports = sendEmail