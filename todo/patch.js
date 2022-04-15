const { filterReqId, requestBodyBufferHandle } = require('../utils')
const { errorHandle, successHandle } = require('../utils/responseHandle')
const Todo = require('../model/todo')
const { getTodos } = require('./get')

const editItem = async (req, res) => {
  try {
    const id = filterReqId(req)
    const { content } = await requestBodyBufferHandle(req)
    await Todo.findByIdAndUpdate(id, { content })
    const list = await getTodos()
    successHandle({
      res,
      message: '修改成功',
      data: list
    })
  } catch {
    errorHandle({
      res,
      message: '修改失敗，資料錯誤'
    })
  }
}

module.exports = {
  editItem
}