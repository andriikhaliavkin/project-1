const http = require('http') // подключение CommonJS module http
const fs = require('fs') // подключения CommonJS module fs  (файловая система)
const server = http.createServer(handleRequest) // создаем сервер
server.listen(3000) // запускаем сервер на порту 3000

function handleRequest(request, response) {           // объявляем функцию обработки запросов
  response.end(fs.readFileSync('public/index.html'))  // даем ответ клиенту
}
