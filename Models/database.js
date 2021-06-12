const mongoose = require('mongoose')

const recschema = mongoose.Schema({
    fullname:{
    type: String,
    require: true
},
streetone:{
    type: String,
    require: true
},
streettwo:{
    type: String,
    require: true
},
city:{
    type: String,
    require: true
},
state:{
    type: String,
    require: true
},
pincode:{
    type: Number,
    require: true
},
country:{
    type: String,
    require: true
},
number:{
    type: Number,
    require: true
},
email:{
    type: String,
    require: true
},
skills:{
    type: String,
    require: true
},
qualification:{
    type: String,
    require: true
},
education:{
    type: String,
    require: true
},
birthdate:{
    type: String,
    require: true
},
},{
timestamps: true 
})

module.exports = mongoose.model('recruimentcol',recschema)