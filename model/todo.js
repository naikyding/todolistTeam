const mongoose = require('mongoose')
const { Schema } = mongoose

const todoSchema = new Schema({
  content: {
    type: String,
    required: [true, '請輸入內容']
  }
}, {
  versionKey: false,
  timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo