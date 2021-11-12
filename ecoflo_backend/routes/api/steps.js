const express = require('express')
const router = express.Router();

const Step = require('../../models/step')
router.get('/pastweek', (req, res) => {
    var queriedUsername = req.query.username
    var lastWeek = new Date(Date.now() - (8 * 24 * 60 * 60 * 1000))
  
    lastWeek.setUTCHours(00, 00, 00)
    lastWeek.setUTCMinutes(00,00,00)
    console.log("Last weeks date: ")
    console.log(lastWeek)
    var query = {
        username: queriedUsername,
        date: lastWeek
    }

    Step.findOne(query, (error, steps) => {
        if(!steps){
            res.send(
                {
                    'type': 'No steps found for user for last week',
                    'success': false
                }
            )
        }
        else{
            res.send(
                {
                'type' : 'Last week User steps',
                'success' : true,
                'steps' : steps
                }
            )
        }
    })

})

router.post('/', (req, res) => {
    var queriedUsername = req.body.username
    var queriedDate = req.body.date
    var queriedSteps = req.body.steps

    var lastWeeksDate = new Date(new Date(queriedDate));
    lastWeeksDate.setDate(lastWeeksDate.getDate() - 7);

    lastWeeksDate.setUTCMilliseconds(00, 00, 00);
    lastWeeksDate.setUTCHours(00, 00, 00)
    var query = {'username': queriedUsername, 'date' : lastWeeksDate}
    var newSteps = {$inc: {'steps' : queriedSteps}}

    Step.findOneAndUpdate(query, newSteps, {upsert: true}, (error, user) => {
        if(error){
            res.send(
                {
                    'type' : 'Encountered Error updating user steps',
                    'success' : false
                })
        }
        else{
            res.send(
                {
                    'type': 'Sucessfully updated user steps',
                      'success': true
                })
        }
    })

})

module.exports = router