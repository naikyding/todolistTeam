const { successHandle, errorHandle } = require('../utils/responseHandle')
const DB = require('../db')
const { filterReqId } = require('../utils')

const deleteList = (res) => {
  DB.length = 0

  successHandle({
    res,
    message: '刪除列表成功',
    data: DB
  })
}

const deleteItem = (req, res) => {
  const id = filterReqId(req)
  const deleteItemIndex = DB.findIndex(item => item.id === id)

  if (deleteItemIndex < 0) return errorHandle({
    res,
    message: '資料錯誤 or 不存在的 id 資料'
  })

  DB.splice(deleteItemIndex, 1)
  successHandle({
    res,
    message: '刪除項目成功',
    data: DB
  })
}

module.exports = {
  deleteList,
  deleteItem,
}
