const filterReqId = (req) => {
  const { url } = req
  const urlAry = [...url.split('/')]
  return urlAry.pop()
}

/**
 * 請求 body 處理
 * @date 2022-03-30
 * @param {object} req 請求物件
 * @returns {json} 請求 body 內容 
 */
const requestBodyBufferHandle = async (req) => {
  let buffers = []
  for await (const buffer of req) {
    buffers.push(buffer)
  }

  return JSON.parse(Buffer.concat(buffers).toString())
}

module.exports = {
  filterReqId,
  requestBodyBufferHandle
}