const mongoose = require('mongoose') 
const emissionSchema = mongoose.Schema

const EmissionSchema = new emissionSchema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    emissions: {
        type: Number,
        required: true
    }
})

module.exports = Emission =  mongoose.model('Emission', EmissionSchema)
