const {Router} = require ('express')
const userController = require('../controller/usercontroller')
const route = Router()

route.get('/view',userController.viewUser)
route.patch('/update/:userId',userController.updateUser)

module.exports=route