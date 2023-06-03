const mongoose = require('mongoose')


// Database Connection
const dbConnection = ()=>{
    const db = process.env.DB
    mongoose.connect(db,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('Database Connected Successfully.');
    })
    .catch(err=>{
        console.log(`Database Error ${err}`);
    })
}

module.exports = dbConnection