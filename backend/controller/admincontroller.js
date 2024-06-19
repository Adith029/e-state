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

const deleteUser = async(req,res)=>{
   try {
    const {id} = req.params
    await userDB.findByIdAndDelete(id)
    return res.status(200).send("Deleted")
   } catch (error) {
    return res.status(500).send(error)
   }
}

module.exports={viewUser,deleteUser}