const express = require('express')
const emissions = require('../routes/api/emissions')
const users = require('../routes/api/users')

function createTestServer(){
    const app = express()
    
    app.use(express.json())
    app.use(express.urlencoded())
    app.use('/api/emissions', emissions)
    app.use('/api/login', users)

    return app
}

module.exports = createTestServer