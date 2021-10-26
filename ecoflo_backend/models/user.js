const mongoose = require('mongoose')
const userSchema = mongoose.Schema

const UserSchema = new userSchema({
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
})

module.exports = User =  mongoose.model('User', UserSchema)

