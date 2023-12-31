const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    required: true,
    ref:'User'
  },
  text: {
    type:String,
    required:true
  }
}, {
  timestamps:true
})

module.exports = mongoose.model('Todo',todoSchema)