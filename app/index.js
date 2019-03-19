const express = require('express')
const morgan = require('morgan')

const routes = require('./server/app/routes')
const port = process.env['PORT']

const app = express()

app.use(morgan('combined'))
app.use(express.static(`${__dirname}/public`))
app.use('/node_modules', express.static(`${__dirname}/../node_modules`))
routes(app)


app.listen(port, () => console.log(`Node server started on port ${port}`))
