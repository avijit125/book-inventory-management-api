const express = require('express');
const router = express.Router();

const stortesController = require('../controllers/bookstores')
const isAuth = require('../middleware/is-auth')
const role = require('../middleware/role')

router.get('/all',isAuth,  stortesController.getAllStores)
router.post('/',isAuth,role, stortesController.createStore)
router.patch('/:id',isAuth,role, stortesController.updateStore)
router.delete('/', isAuth, role,  stortesController.deleteStore)


module.exports = router
