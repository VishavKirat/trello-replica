import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
    comments:[{
        owner:String,
        id:String,
        task:String,
        content:String,
        date_created:{
            type: Date,
            default: Date.now
        }

    }]
})

module.exports = mongoose.model('COMMENT',CommentSchema)