const { successHandle, errorHandle } = require('../utils/responseHandle')
const Todo  = require('../model/todo')
const { filterReqId } = require('../utils')

const deleteList = async(res) => {
  try {
    await Todo.deleteMany({})
    const list = await Todo.find()
    successHandle({
      res,
      message: '刪除列表成功',
      data: list
    })
  } catch {
    errorHandle({
      res,
      message: '操作失敗'
    })
  }
}

const deleteItem = async(req, res) => {
  try {
    const id = filterReqId(req)
    await Todo.findByIdAndDelete(id)
    const list = await Todo.find()
  
    successHandle({
      res,
      message: '刪除項目成功',
      data: list
    })
  } catch {
    errorHandle({
      res,
      message: '操作失敗'
    })
  }
}

module.exports = {
  deleteList,
  deleteItem,
}
