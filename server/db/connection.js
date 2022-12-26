const mongoose = require('mongoose');
const process = require('process');

const DB = process.env.DATABASE;

//connect mogoose with nodejs
mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(()=> console.log("DATABASE CONNECT")).catch((error)=> {console.log("Error")})