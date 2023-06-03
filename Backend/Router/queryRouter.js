const express = require('express')
const { createQuestion, getQuestions, updateQuestions, deleteQuestion, getOneQuestion, postAnswer, likeQuestions, ansLike, unlikeQuestion, getOwnQuestions, updateOwnQuestions, deleteOwnQuestion } = require('../Controller/queryController')
const { protect } = require('../Controller/userController')
const queryRoute = express.Router()

queryRoute.route('/').post(protect,createQuestion).get(getQuestions)
queryRoute.route('/own').get(protect,getOwnQuestions)
queryRoute.route('/:ID').get(getOneQuestion).put(protect,updateQuestions).delete(protect,deleteQuestion)
queryRoute.route('/own/:ID').put(protect,updateOwnQuestions).delete(protect,deleteOwnQuestion)
queryRoute.route('/like/:ID').put(protect,likeQuestions)
queryRoute.route('/unlike/:ID').put(protect,unlikeQuestion)
// queryRoute.route('/ans/:ID').post(protect,postAnswer)
// queryRoute.route('/ans/like/:ID').put(protect,ansLike)
// queryRoute.route('/ans/unlike/:ID').put(ansLike)


module.exports = queryRoute