const asyncHandler = require('express-async-handler')


//@desc create a new user
//@route  POST /api/users
//@access Public

const register = asyncHandler(async (req, res) => {
  res.status(201).json({message:'register'})
})


module.exports = {
  register
}