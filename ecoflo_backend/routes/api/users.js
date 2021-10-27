const express = require('express')
const router = express.Router()

const User = require('../../models/user')
const JSONToken = require('jsonwebtoken')

let encrypt = require('bcryptjs')

//Functions



router.get('/getLoginToken', (req, res) => {
    console.log("hello")
    
    JSONToken.sign({user: "loginUser"}, 'hashKey', {expiresIn: 30}, (error, loginToken) => {
        if(error){
            res.send({"message":"error getting login token, try again"})
        }
        console.log("Created new login token, expires in 30 seconds")
        res.send({"loginToken":loginToken})
        }
    )

})

router.post('/', (req, res) => {
    var queriedUsername = req.body.username
    var queriedPassword = req.body.password
    var existingUser = req.body.existingUser

    User.findOne({username:queriedUsername}, (error, user) => {
        if(error){
            return false
        }
        if(user && !existingUser){
            res.send({
                success:false,
                type:"Username taken"
            })
        }
        if((user && existingUser)){
            var passwordInDatabase = user.password
            encrypt.compare(queriedPassword, passwordInDatabase, (error, equal) => {
                if(equal){
                    JSONToken.sign({user: queriedUsername}, 'hashKey', {expiresIn: 60 * 60 * 24 * 7}, (error, loginToken) => {
                        if(error){
                            res.send({"message":"error getting login token, try again"})
                        }
                        console.log("Created new login token, expires in 7 days seconds")
                        res.send({
                            success:true,
                            type:"Correct Password",
                            correctPassword: true, 
                            "loginToken":loginToken
                        })
                        }
                    )
                }
                else{
                    res.send({
                        success:false,
                        type:"Incorrect Password",
                        correctPassword: false
                    })
                }
            })
           
        } 
        else if(!user && !existingUser){
            
            let hashPassword = async function(){
                var passwordHash = await encrypt.hash(queriedPassword, 10)
                return passwordHash;
            }
            
            hashPassword().then((hashedPassword) => {
                const newUser = new User({
                    username: queriedUsername,
                    password: hashedPassword
                })
                newUser.save().then(user => {
                   res.json({
                        success:true,
                        type:"Created new user"
                    })
                    }
                )
                .catch(error => {
                    res.send({
                        success:false,
                        type:"Failed to create new user",
                        "message":"save function failed"
                    })
                })
            })
            .catch(error => {
                res.send({
                    success:false,
                    type:"Failed to hash password",
                    "message":"Password failed to hash error"
                })
            })
        }
        else if(!user && existingUser){

            res.send({
                success:false,
                type:"Unknown user",
                "message":"user does not exist"})
        }
    })
})



module.exports = router