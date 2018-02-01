var express = require('express')
var path = require('path')
var port = process.env.PORT || 3001
var proxy = require('http-proxy-middleware');

var app = express()

var url = 'http://localhost:3000'
app.use(express.static(__dirname + '/build'))

app.use('/api/*', proxy({ target: url, changeOrigin: true }))

app.use('*', function (request, response) {
    console.log("request:", path.resolve(__dirname, 'build'))
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})