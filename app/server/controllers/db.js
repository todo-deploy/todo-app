mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

mongoose.connect(process.env['DB'], { useNewUrlParser: true })
mongoose.connection.on('open', () => console.log('Connected to db'))

module.exports = mongoose
