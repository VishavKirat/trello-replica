import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
        name:String,
        id:String,
        group:String,
        owner:String,
        isComplete:Boolean,
        date_created:{
            type: Date,
            default: Date.now
        }
})

module.exports = mongoose.model('TASK',TaskSchema)