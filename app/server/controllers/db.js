mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

mongoose.connect(process.env['DB'], {
  user: process.env['DB_USER'],
  pass: process.env['DB_PASS'],
  dbName: process.env['DB_NAME'],
  useNewUrlParser: true
})
mongoose.connection.on('open', () => console.log('Connected to db'))

module.exports = mongoose
