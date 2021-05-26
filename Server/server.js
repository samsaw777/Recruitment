const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Message = require('./Models/database')
const bodyparser = require('body-parser')
require('dotenv').config()
const password = process.env.Database_Password

//Middleware
app.use(express.json());


//Connecting to mongoose
const connection_url = `mongodb+srv://admin:${password}@cluster0.eewt9.mongodb.net/recruitment?retryWrites=true&w=majority`
mongoose.connect(connection_url,{useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{
        console.log('Connected to database');
    })


// api routing
app.get('/',(req,res)=>res.status(200).send("Hello World!"))

app.post('/postform',(req,res)=>{
    const message = req.body
    Message.create(message, (err, data)=>{
        if (err){
            res.status(500).send(err.message)
        }
        else{
            res.status(201).send(`New Message create: \n ${data}`)
        }
    })
})


//Listen to port 9000

app.listen(9000,()=>console.log(`Listening to port 9000`))