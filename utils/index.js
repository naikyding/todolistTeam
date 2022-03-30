const filterReqId = (req) => {
  const { url } = req
  const urlAry = [...url.split('/')]
  return urlAry.pop()
}

module.exports = {
  filterReqId,
}