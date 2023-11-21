const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  try {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
      const decoded =await jwt.verify(token, process.env.JWT_SECRET)
      
      //FIND USER USING TOKEN
      req.user = await User.findById(decoded.id)
      next()
    }
  } catch (error) {
    console.error(error)
    res.status(401)
    throw new Error('Not authorized')
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized')
  }
})

module.exports = {protect}
