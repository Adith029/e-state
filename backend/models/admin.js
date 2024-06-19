const mongoose = require('mongoose')
const admin = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const admindata = mongoose.model('admin',admin)
module.exports = admindata