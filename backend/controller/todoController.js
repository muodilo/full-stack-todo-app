const asyncHandler = require('express-async-handler')
const Todo = require('../models/todoModel')
const User = require('../models/userModel') 


//@desc Get user todos
//@route GET /api/todo
//@access private

const getTodos = asyncHandler(async (req, res) => {
//get user using the id in jwt
  const user = await User.findById(req.user._id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const todos = await Todo.find({user:req.user._id})

res.status(200).json(todos)

})

//@desc create a todo
//@route POST /api/todo
//@access private
const createTodo = asyncHandler(async (req, res) => {

  const { text } = req.body
  if (!text) {
    res.status(400)
    throw new Error('you must add text')
  }

  const user = User.findById(req.user._id)
  res.status(200).json({message:'create todo'})
})



module.exports = {
  getTodos,
  createTodo
}