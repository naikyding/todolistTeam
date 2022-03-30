const { deleteList, deleteItem } = require('./todo/delete')
const {
  getList,
  options,
  notFound,
} = require('./todo/get')

const serverListener = (req, res) => {
  if (req.url == "/todos" && req.method == "GET") getList(res)
  else if (req.url == "/todos" && req.method == "POST") {
    // postTodo.js
  } else if (req.url == "/todos" && req.method == "DELETE") deleteList(res)
  else if (req.url.startsWith("/todos/") && req.method == "DELETE") deleteItem(req, res)
  else if (req.url.startsWith("/todos/") && req.method == "PATCH") {
    // patchTodo.js
  }
  else if (req.method == "OPTIONS") options(res)
  else notFound(res)

}

module.exports = serverListener 