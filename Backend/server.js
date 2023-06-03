const app = require("./app")
const dotenv = require('dotenv')
const dbConnection = require("./Database/dbConnection")

// Uncaught Exception
process.on('uncaughtException',err=>{
    console.log(`Error ${err}`);
    process.exit(1)
})

// Env Connection
dotenv.config()

// Connecting To Database
dbConnection()




const port = process.env.PORT
const server = app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
})


// Unhandled Rejection
process.on('unhandledRejection',err=>{
    console.log(`Error ${err}`);
    server.close(()=>{
        process.exit(1)
    })
})