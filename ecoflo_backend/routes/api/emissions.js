const express = require('express')
const router = express.Router()

const Emission = require('../../models/emmission')

router.get('/pastweek', (req, res) => {
    var queriedUsername = req.query.username
    var lastWeek = new Date(Date.now() - (8 * 24 * 60 * 60 * 1000))
    lastWeek.setUTCHours(00, 00, 00)
    lastWeek.setUTCMinutes(00,00,00)
    var query = {
        date: {
            $gte: lastWeek
        }, 
        username: queriedUsername
    }
    Emission.find(query, (error, emissions) => {
        if(!emissions){
            res.send(
                {
                    'type' : 'No emissions for specified user',
                    'success' : false
                })        
        }
        else{
            res.send(
            {
                'type' : 'User emissions',
                'success' : true,
                'emissions' : emissions
            })
        }
    })
   
}) 



router.post('/', (req, res) => {
    var queriedUsername = req.body.username
    var queriedEmissions = req.body.emissions
    var queriedDate = req.body.date

    var todaysDate = new Date(new Date(queriedDate).setUTCHours(00, 00, 00));
    todaysDate.setUTCMilliseconds(00, 00, 00);
    var query = {'username': queriedUsername, 'date' : todaysDate}
    var newEmissions = {$inc: {'emissions' : queriedEmissions}}
    Emission.findOneAndUpdate(query, newEmissions, {upsert: true}, (error, user)=> {
        if(error){
            res.send(
                {
                    'type' : 'Encountered Error updating user emissions',
                    'success' : false
                })
        }
        else {
            res.send(
                {
                    'type': 'Sucessfully updated user emissions',
                      'success': true
                })
        }

    }) 
})

module.exports = router