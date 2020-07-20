const express = require ('express')
const serverStatic = require('serve-static')
const path = require('path')
const serveStatic = require('serve-static')
const { prototype } = require('core-js/fn/promise')

const app = express()

app.use('/',serveStatic(path.join(_dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)
console.log('Listening on port: ' + prototype)