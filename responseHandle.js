const { headers } = require('./config')

/**
 * ((成功)) 響應功能
 * @date 2022-03-29
 * @param {object} {res 請求物件
 * @param {string} status='Success' 響應狀態
 * @param {number} statusCode=200 狀態碼
 * @param {string} message='操作成功' 信息
 * @param {Array} data} 資料庫
 */
const successHandle = ({
  res,
  status = 'Success',
  statusCode = 200,
  message = '操作成功',
  data
}) => {
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify({
    status,
    message,
    data
  }))
}

/**
 * ((失敗)) 響應功能
 * @date 2022-03-29
 * @param {object} {res 請求物件
 * @param {string} status='Success' 響應狀態
 * @param {number} statusCode=200 狀態碼
 * @param {string} message='操作成功' 信息
 * @param {Array} data} 資料庫
 */
const errorHandle = ({
  res,
  status = 'Fail',
  statusCode = 400,
  message = '操作失敗',
  data
}) => {
  res.writeHead(statusCode, headers)
  res.end(JSON.stringify({
    status,
    message,
    data
  }))
}

module.exports = {
  successHandle,
  errorHandle,
}