const express = require('express')
const { postAns, ownAns, updateAns, deleteAns, likeAns, unlikeAns, deleteOwnAns } = require('../Controller/ansController')
const { protect } = require('../Controller/userController')
const ansRoute = express.Router()

ansRoute.route('/').get(protect,ownAns)
ansRoute.route('/:ID').post(protect,postAns)
ansRoute.route('/:AnsID').put(protect,updateAns)
ansRoute.route('/:AnsID/:ID').delete(protect,deleteAns)
ansRoute.route('/own/:AnsID/:ID').delete(protect,deleteOwnAns)
ansRoute.route('/like/:AnsID').put(protect,likeAns)
ansRoute.route('/unlike/:AnsID').put(protect,unlikeAns)


module.exports = ansRoute
