const express = require('express')
const router = express.Router()

const Profile = require('../../models/profile')

router.get('/picture', (req, res) => {
    var queriedUsername = req.query.username
    var query = {'username' : queriedUsername}

    Profile.findOne(query,(error, user) =>{
        if(!user){
            res.send(
                {
                    'type' : 'Encountered Error retrieving picture, set username to search for',
                    'success' : false
                })
        }
        else{
            res.send({
                'type':'User profile picture',
                'success':true,
                'profilePicture':user.profilePicture
            })
        }

    })

})


router.post('/picture', (req, res) => {
    var queriedUsername = req.body.username
    var queriedPicture = req.body.profilePicture
    var query = {'username' : queriedUsername}
    var newPicture = {'profilePicture' : queriedPicture}

    Profile.findOneAndUpdate(query, newPicture, {upsert: true}, (error, user) => {
        if(error){
            res.send(
            {
                'type':'Error occured creating new account',
                "success" : true
            })
        }
        else if(!user){
            res.send(
                {
                'type' : 'Created new account',
                'success' : true
            })
        }
        else{
            res.send({
                'type': 'Sucessfully updated picture',
                'success': true
            })
        }
    })
})

router.post('/emissionrate', (req, res) => {
    var queriedUsername = req.body.username
    var queriedEmissionRate = req.body.emissionRate
    var query = {'username' : queriedUsername}
    var newEmissionRate = {'emissionRate' : queriedEmissionRate}

    Profile.findOneAndUpdate(query, newEmissionRate, {upsert: true}, (error, user) => {
        if(error){
            res.send(
                {
                'type' : 'Error encountered while updating emission rate',
                'success' : false
            })
        }
        else if(!user){
            res.send(
                {
                'type' : 'Created new user with new emission rate',
                'success' : true
            })
        }
        else{
            res.send({
                'type': 'Sucessfully updated emission rate',
                'success': true
            })
        }
    })
})

router.get('/emissionrate', (req, res) => {
    var queriedUsername = req.query.username
    var query = {'username' : queriedUsername}

    Profile.findOne(query,(error, user) =>{
        if(!user){
            res.send(
                {
                    'type' : 'Encountered Error retrieving picture, set username to search for',
                    'success' : false
                })
        }
        else{
            res.send({
                'type':'User Emission rate',
                'success':true,
                'emissionRate':user.emissionRate
            })
        }

    }) 
})
module.exports = router;