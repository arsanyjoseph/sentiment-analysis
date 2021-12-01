var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.json')
const cors = require('cors')
const axios = require('axios')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('dist'))
dotenv.config()

const apiKey = process.env.API_KEY 


console.log(__dirname)

/*app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})*/

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/check', function (req, res) {
    const {urlAPI} = req.body
    axios.get(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${urlAPI}&lang=en`)
    .then((response)=> {
        const {model, agreement, subjectivity, confidence, irony} = response.data
        res.send({model, agreement, subjectivity, confidence, irony})
    })
})
