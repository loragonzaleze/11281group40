const mongoose = require('mongoose')
const profileSchema = mongoose.Schema

const ProfileSchema = new profileSchema({
    username: {
        type: String, 
        required: true
    },
    emissions: {
        type: Number, 
        default: 0
    },
    profilePicture : {
        type: String,
        default: 'default'
    }
})

module.exports = Profile =  mongoose.model('Profile', ProfileSchema)

