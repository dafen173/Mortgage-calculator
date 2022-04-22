const Router = require('express')
const router = new Router
const userController = require('../controller/manage-users.controller')

router.post('/banks', userController.createUser)
router.get('/banks', userController.getUsers)
router.put('/banks/:id', userController.updateUser)
router.delete('/banks/:id', userController.deleteUser)

router.put('/manage-user/update-groupname/:id', userController.updateUserGroupname)
router.get('/manage-user/:id', userController.getUser)



// router.post('/manage-user', userController.createUser)
// router.get('/manage-user', userController.getUsers)
// router.put('/manage-user/:id', userController.updateUser)
// router.delete('/manage-user/:id', userController.deleteUser)

// router.put('/manage-user/update-groupname/:id', userController.updateUserGroupname)
// router.get('/manage-user/:id', userController.getUser)

module.exports = router

