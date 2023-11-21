const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const {getTodos,createTodo} = require('../controller/todoController')


router.route('/').get(protect,getTodos).post(protect,createTodo)

module.exports = router