const mongoose = require('mongoose')
const createTestServer = require('./testServer')
const supertest = require('supertest')
const { expect } = require('chai')
const db = require('../config/keys').mongoURI;


beforeAll( () => {
    mongoose
    .connect(db,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
})

afterAll( () => {
    mongoose.connection.close()
})

const app = createTestServer()

test("GET sample emission users", async() => {
    await supertest(app)
        .get("/api/emissions/pastweek?username=admin")
        .expect(200)
        .then((res) => {
            expect(res.body.success).equal(true)
            expect(res.body.type).equal('User emissions')
        })
})

test("POST user emission for today", async() => {
    var body = 
    {
        "username" : "admin",
        "date": new Date(),
        "emissions" : 12
    }
    await supertest(app)
    .post('/api/emissions')
    .set('Content-type', 'application/json')
    .send(body)
    .expect(200)
    .then((res) => {
        expect(res.body.success).equal(true)
        expect(res.body.type).equal('Sucessfully updated user emissions')
    })
    
   
})

test("POST User login service for existing user", async() => {
    var body = {
        "username" : "admin",
        "password" : "admin",
        "existingUser" : false
    }

    await supertest(app)
    .post('/api/login')
    .set('Content-type', 'application/json')
    .send(body)
    .expect(200)
    .then((res) => {
        expect(res.body.success).equal(false)
        expect(res.body.type).equal('Username taken')
    })
})


test("POST User logins with incorrect password", async() => {
    var body = {
        "username" : "admin",
        "password" : "not correct password",
        "existingUser" : true
    }

    await supertest(app)
    .post('/api/login')
    .set('Content-type', 'application/json')
    .send(body)
    .expect(200)
    .then((res) => {
        expect(res.body.success).equal(false)
        expect(res.body.type).equal('Incorrect Password')
        expect(res.body.correctPassword).equal(false)
    })
})

test("POST User logins with correct password", async() => {
    var body = {
        "username" : "admin",
        "password" : "admin",
        "existingUser" : true
    }
    await supertest(app)
    .post('/api/login')
    .set('Content-type', 'application/json')
    .send(body)
    .expect(200)
    .then((res) => {
        expect(res.body.success).equal(true)
        expect(res.body.type).equal('Correct Password')
        expect(res.body.correctPassword).equal(true)
    })


})