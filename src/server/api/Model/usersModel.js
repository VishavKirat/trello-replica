import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    users:[{id:String,
        name:String,
        friends:[String],
        date_created:{
            type: Date,
            default: Date.now
        }

    }],
})

module.exports = mongoose.model('USER',UserSchema)