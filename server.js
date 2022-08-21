const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const BlogSchema = new mongoose.Schema({
tittle: {
    type: String,
    required: true
},
desc: {
    type: String,
    required: true
},
slug: {
    type: String,
    required: true,
    unique: true
},
createdat: {
     type: String,
     required: true
},
updatedat: {
         type: String,
     required: true
},
thumbnail: {
         type: String,
     required: true
},
author: {
         type: String,
     required: true
},
content: {
         type: String,
     required: true
},
authorpic: {
         type: String,
     required: true
},
topic: {
         type: String,
     required: true
}
})

const ContactSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true
                },
        email: {
                type: String,
                required: true
                },
        message: {
                type: String,
                required: true
                },
        date: {
                type: String,
                required: true,
                default: new Date().toString().substring(0, 21)
                }
})

const blogs = mongoose.model("blogs" , BlogSchema)
const contacts = mongoose.model("contact" , ContactSchema , "contact")

app.get('/', (req,res)=>{
    blogs.find({}).sort({_id: -1}).exec( function(err,data){
    	res.send(data)
    })
})


app.listen(3000 , ()=> {
    console.log('running on port 3000')
})

