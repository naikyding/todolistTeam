const { requestBodyBufferHandle } = require('../utils')
const { v4: uuid } = require('uuid')
const DB = require('../db')

const {
  successHandle,
  errorHandle,
} = require('../utils/responseHandle')

const postItem = async (req, res) => {
  try {
    const { content } = await requestBodyBufferHandle(req)
    if (!content) throw false

    DB.push({
      id: uuid(),
      content
    })
    successHandle({
      res,
      statusCode: 201,
      message: '新增成功',
      data: DB
    })
  } catch {
    errorHandle({
      res,
      message: '資料格式錯誤!'
    })
  }
}

module.exports = {
  postItem
}