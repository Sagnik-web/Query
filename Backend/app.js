const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./Middleware/error')
const queryRoute = require('./Router/queryRouter')
const userRouter = require('./Router/userRouter')
const ansRoute = require('./Router/ansRouter')
const app = express()


app.use(cors(
    {
        origin:'http://localhost:3000',
        credentials:true
    }
))
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/query',queryRoute)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/ans',ansRoute)
app.use(errorMiddleware)


module.exports = app