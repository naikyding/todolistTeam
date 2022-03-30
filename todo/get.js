const { successHandle, errorHandle } = require('../utils/responseHandle')
const DB = require('../db')

/**
 * 取得列表
 * @date 2022-03-30
 * @param {object} res 響應物件
 * @returns {object} 響應內容
 */
const getList = (res) => successHandle({
  res,
  message: '成功取得列表',
  data: DB
})

/**
 * CORS preflight
 * @date 2022-03-30
 * @param {object} res 響應物件
 * @returns {object} 響應內容
 */
const options = (res) => res.writeHead(200, headers)

/**
 * 404 not found 頁面不存在
 * @date 2022-03-30
 * @param {object} res 響應物件
 * @returns {object} 響應內容
 */
const notFound = (res) => errorHandle({
  res,
  statusCode: 404,
  message: '頁面不存在',
})

module.exports = {
  options,
  notFound,
  getList,
}
