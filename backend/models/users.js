const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    },
    address:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    zipcode:{
        type:String
    },
    photo:{
        type:String
    }
})

const userDB = mongoose.model('users',schema)
module.exports=userDB