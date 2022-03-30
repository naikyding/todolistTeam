const DB = require('../db')
const { filterReqId, requestBodyBufferHandle } = require('../utils')
const { errorHandle, successHandle } = require('../utils/responseHandle')

const editItem = async (req, res) => {
  const id = filterReqId(req)
  const DBeditItem = DB.find(item => item.id === id)
  if (!DBeditItem) return errorHandle({
    res,
    message: '修改失敗，資料有誤或 id 不存在'
  })

  try {
    const { content } = await requestBodyBufferHandle(req)
    if (!content) throw false

    DBeditItem.content = content
    successHandle({
      res,
      message: '修改成功',
      data: DB
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