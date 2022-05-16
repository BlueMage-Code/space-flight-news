const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const req = require('express/lib/request')
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(routes)



app.listen(8080, () => {
    console.log('Express started at http://localhost:8080')
})