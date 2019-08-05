import mongoose from 'mongoose'

const GroupSchema = new mongoose.Schema({
    groups:[{
        name:String,
        id:String,
        owner:String,date_created:{
            type: Date,
            default: Date.now
        }

    }]
})

module.exports = mongoose.model('GROUP',GroupSchema)