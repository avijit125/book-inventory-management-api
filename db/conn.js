const {connect} = require('mongoose')
require('dotenv').config()

const connection = ()=>{
    connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(()=> console.log("database connected succesfully")).catch(err=>console.log(err))
}

module.exports = connection