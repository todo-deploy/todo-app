const express = require('express')
const routes = require('./server/app/routes')
const port = process.env['PORT']

const app = express()
app.use(express.static('public'))
app.use('/node_modules', express.static('node_modules'))
routes(app)


app.listen(port, () => console.log(`Node server started on port ${port}`))
