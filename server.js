require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const databaseConnection = require('./db/conn.js')

const authRoutes = require('./routes/auth.js');
const classRoutes = require('./routes/classes.js')

// initialized app
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(cors())

// error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });


  // register the routes
app.use('/auth', authRoutes);
app.use('/store', classRoutes);

const PORT = process.env.PORT || 3000

// initialized server
const server = async()=>{
    try {
    databaseConnection()
    app.listen(PORT, ()=> console.log(`server running on ${PORT}`))
    } catch (error) {
        console.log(error)
    }
    
}

server();