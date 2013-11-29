
var server = require('./lib/app')
  , DB = process.env.MONGO_URI || 'mongodb://localhost/jazzui'
  , PORT = process.env.PORT || '3000'

server(DB, process.env.JAZZUI_PASSWORD).listen(PORT, function () {
  console.log('Listening')
})

