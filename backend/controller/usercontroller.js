const userDB = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const viewUser = async (req,res)=>{
    try {
        const users = await userDB.find()
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send(error)
    }
}


const updateUser = async (req,res) =>{
    try {
        const {userId} = req.params
        const userData = req.body
       const user= await userDB.findById(userId)
       if(user){
        await userDB.updateOne(userData)
        console.log(user);
        return res.status(200).send(userData)
       }
        else{
            return res.status(200).send("User Not Found")
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports={viewUser,updateUser}