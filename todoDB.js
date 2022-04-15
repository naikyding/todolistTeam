const mongoose = require('mongoose')
require('dotenv').config()
const Todo = require('./model/todo')
const todoDBUrl = process.env.TODO_DB.replace('<password>', process.env.TODO_DB_PASSWORD)

const todoDBConnect = async() => {
  try {
    await mongoose.connect(todoDBUrl)
    console.log('連線成功')
  } catch {
    console.log('連線失敗')
  }
}

module.exports = { todoDBConnect }