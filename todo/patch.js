const DB = require('../db')
const { errorHandle } = require('../utils/responseHandle')

const editItem = (req, res) => {
  const { url } = req
  const id = url.split('/').pop()
  const editItem = DB.find(item => item.id === id)

  if (!editItem) return errorHandle({
    res,
    message: '修改失敗，資料有誤或 id 不存在'
  })

  try {

  } catch {

  }
}

module.exports = {
  editItem
}