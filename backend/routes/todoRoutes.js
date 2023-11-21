const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const {getTodos,createTodo,deleteTodo,updateTodo} = require('../controller/todoController')


router.route('/').get(protect, getTodos).post(protect, createTodo)
router.route('/:id').delete(protect,deleteTodo).put(protect,updateTodo)

module.exports = router