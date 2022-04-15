const { requestBodyBufferHandle } = require('../utils')
const Todo = require('../model/todo')
const { getTodos } = require('./get')

const {
  successHandle,
  errorHandle,
} = require('../utils/responseHandle')

const postItem = async (req, res) => {
  try {
    const { content } = await requestBodyBufferHandle(req)

    await Todo.create({
      content
    })
    const list = await getTodos()
    successHandle({
      res,
      statusCode: 201,
      message: '新增成功',
      data: list
    })
  } catch {
    errorHandle({
      res,
      message: '操作錯誤!'
    })
  }
}

module.exports = {
  postItem
}