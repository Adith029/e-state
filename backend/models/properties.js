const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    propertyType:{
        type:String,
        enum:['House','Villa','Apartment',"Office","Land","Shop"],
        required:true   
    },
    bathroom:{
        type:String,
    },
    bedroom:{
        type:String,
    },
    measurements:{
        type:String,
        required:true
    },
    builtIn:{
        type:String,
        required:true
    },
    parking:{
        type:String,
        enum:["Yes","No"]
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

const propertyDB = mongoose.model('properties',schema)
module.exports=propertyDB