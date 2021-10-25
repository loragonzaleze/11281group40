const express = require('express')
const router = express.Router()

const Profile = require('../../models/profile')


router.get('/emissions', (req, res) => {
    var queriedUsername = req.body.username
    Profile.findOne({'username' : queriedUsername}, (error, user) => {
        if(!user){
            res.send(
                {
                    'type' : 'Unknown user',
                    'success' : false
                })
        }
        else{
            res.send({
                'type' : 'User Emissions',
                'success' : true,
                'emissions' : user.emissions
            })
        }
    })
 
})


router.post('/emissions', (req, res) => {
    var queriedUsername = req.body.username
    var queriedEmissions = req.body.emissions
    var query = {'username': queriedUsername}
    var newEmissions = {$inc: {'emissions': queriedEmissions}}
    Profile.findOneAndUpdate(query, newEmissions, {upsert: true}, (error, user) => {
        if(error){
             res.send({'type' : 'Encountered Error finding user',
                       'success' : false})
        }
        else{
            res.send({'type': 'Sucessfully updated user',
                      'success': true})
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
            res.send({'type' : 'Encountered Error updating picture',
                       'success' : false})
        }
        else{
            res.send({
                'type': 'Sucessfully updated picture',
                      'success': true
            })
        }
    })


})
module.exports = router;