const mongoose = require('mongoose')
const stepsSchema = mongoose.Schema

const StepsSchema = new stepsSchema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        required: true
    },
    steps: {
        type: Number,
        required: true
    }
})

module.exports = Steps = mongoose.model('Steps', StepsSchema)