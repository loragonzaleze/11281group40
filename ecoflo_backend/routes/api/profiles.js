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
        if(!user){
            res.send(
                {
                'type' : 'Encountered Error updating picture',
                'success' : false
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
module.exports = router;