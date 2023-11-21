const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.objectID,
    required: true,
    ref:'User'
  },
  text: {
    type: '',
    required:true
  }
}, {
  timestamps:true
})

module.exports = mongoose.model('Todo',todoSchema)