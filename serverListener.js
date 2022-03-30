const {
  getList,
  options,
  notFound,
} = require('./todo/get')

const { postItem } = require('./todo/post')

const serverListener = (req, res) => {
  if (req.url == "/todos" && req.method == "GET") getList(res)
  else if (req.url == "/todos" && req.method == "POST") postItem(req, res)
  else if (req.url == "/todos" && req.method == "DELETE") {
    // deleteTodo.js
  } else if (req.url.startsWith("/todos/") && req.method == "DELETE") {
    // deleteTodo.js
  } else if (req.url.startsWith("/todos/") && req.method == "PATCH") {
    // patchTodo.js
  }
  else if (req.method == "OPTIONS") options(res)
  else notFound(res)

}

module.exports = serverListener 