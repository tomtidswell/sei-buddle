
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

require('dotenv').config()

app.use(bodyParser.json())

console.log('this is the back end!!! Hello world')

app.listen(process.env.PORT, () => console.log(`App is listening on port ${process.env.PORT}`))
