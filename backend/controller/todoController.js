const asyncHandler = require('express-async-handler')
const Todo = require('../models/todoModel')
const User = require('../models/userModel') 


//@desc Get user todos
//@route GET /api/todo
//@access private

const getTodos = asyncHandler(async (req, res) => {
//get user using the id in jwt
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const todos = await Todo.find({user:req.user.id})

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

  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
  const todo =await Todo.create({
    text,
    user:req.user.id
  })
  res.status(201).json(todo)
})

//@desc  Delete todo
//@route DELETE api/tickets/:id
//access Private

const deleteTodo = asyncHandler(async (req, res) => {
  //get user using the in jwt
  const user =await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }

  //search todo
  const todo = await Todo.findById(req.params.id)
  if (!todo) {
    res.status(400)
    throw new Error('Todo not found')
  }

  if (todo.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }
  await todo.deleteOne()
  res.status(200).json({
    success:true
  })
})

//@desc update todo
//route PUT /api/todos/:id
//access private
const updateTodo = asyncHandler(async (req, res) => {
  //search user using the id in jwt
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400)
    throw new Error('user not found')
  }

  const todo = await Todo.findById(req.params.id)
  if (!todo) {
    res.status(400)
    throw new Error('todo not found')
  }
  if (todo.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not authorized')
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
  
  res.status(200).json(updatedTodo)
})

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo
}