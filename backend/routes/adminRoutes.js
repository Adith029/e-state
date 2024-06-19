const {Router} = require ('express')
const adminController = require('../controller/admincontroller')
const route = Router()

route.get('/view',adminController.viewUser)
route.delete('/delete/:id',adminController.deleteUser)

module.exports=route