const express = require('express')
const app = express()
const cors = require('cors');

const port = 4000
const personel = require('./apis/Controllers/PersonelController')

app.use(cors())
app.use('/personel', personel)

app.listen(port, () => console.log('Tracker api listening at http://localhost:' + port))