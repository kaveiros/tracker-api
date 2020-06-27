const dbPool = require('mongoose')
dbPool.connect('mongodb://localhost/tracker', {useNewUrlParser:true})

module.exports = dbPool
