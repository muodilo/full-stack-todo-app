const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//@desc create a new user
//@route  POST /api/users
//@access Public

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('You must include all fields')
  }
  //check if user exist
  const user = await User.findOne({ email })
  if (user) {
    res.status(400)
    throw new Error('User already exist')
  }

  try {
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    //register a user
    const user = await User.create({
      name,
      email,
      password:hashedPassword
    })
    if (user) {
      res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token:generateToken(user._id)
      })
    }
  } catch (error) {
    res.status(400)
    throw new Error(error.message)
  }
})

// @desc login
//@route POST /api/users/login
//@access Public

const login = asyncHandler(async (req, res) => {
  const {email,password} = req.body
  //check if user exist
  if (!email || !password) {
    res.status(400)
    throw new Error('you must include all fields')
  }

  try {
    const user = await User.findOne({ email })
    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token:generateToken(user._id)
      })
    }
    
    else{
      res.status(401)
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    res.status(401)
    throw new Error(error.message)
  }


})

// @desc geting me
//@route POST /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json({id:req.user.id})
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn:'30d'
  })
}

module.exports = {
  register,
  login,
  getMe
}