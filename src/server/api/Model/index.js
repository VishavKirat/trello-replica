import mongoose from 'mongoose'

const trelloSchema = new mongoose.Schema({
    users:[{id:String,
        name:String,
        friends:[String]
    }],
    groups:[{
        name:String,
        id:String,
        owner:String
    }],
    tasks:[{
        name:String,
        id:String,
        group:String,
        owner:String,
        isComplete:Boolean,
    }],
    comments:[{
        owner:String,
        id:String,
        task:String,
        content:String,
    }]
})

module.exports = mongoose.model('Trello',trelloSchema)