const express = require('express')
const router = express.Router();

const Step = require('../../models/step')

router.get('/leaderboard', (req, res) => {
    const lastSunday = new Date();
    lastSunday.setDate(lastSunday.getDate()-lastSunday.getDay());
    lastSunday.setUTCHours(0, 0, 0, 0)
    lastSunday.setUTCMinutes(0, 0, 0, 0)
    lastSunday.setUTCSeconds(0, 0, 0, 0)

    var query = {'date' : lastSunday}
    console.log(query)
    console.log("Last sunday: " + lastSunday)
    Step.find(query).sort({steps: -1}).limit(10).then((topUsers) => {
        if(!topUsers){
            
            res.send(
                {
                    'type':'Encountered error retrieving top steps',
                    'success' : false
                }
            )
        }
        else{
            let userSteps = topUsers.map(user => {
                return user.steps
            })
            let userNames = topUsers.map(user => {
                return user.username
            })
            res.send(
                {
                    'type' : 'Past week top 10 users',
                    'success' : true,
                    'users' : userNames,
                    'steps' : userSteps

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

    lastWeeksDate.setUTCMilliseconds(00, 00, 00);
    lastWeeksDate.setUTCHours(00, 00, 00)
    var query = {'username': queriedUsername, 'date' : lastWeeksDate}
    var replacement = {
        'steps' : queriedSteps
    }

    Step.findOneAndUpdate(query, replacement, {upsert : true}).then((user) => {
        console.log(user)
        if(!user){
            res.send(
                {
                    'type' : 'Created new entry for user',
                    'success' : true
                }
            )
        }
        else{
            res.send(
                {
                    'type' : 'Updated user steps',
                    'success' : true
                }
            )
        }
    })
})

module.exports = router