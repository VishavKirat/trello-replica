 import mongoose from 'mongoose'
 import '../Model/commentModel'
 import '../Model/groupModel'
 import '../Model/taskModel'
 import '../Model/usersModel'
 import {initState} from '../.././initState'
import { request } from 'http';
 const comment = mongoose.model('COMMENT')
 const user = mongoose.model('USER')
 const group = mongoose.model('GROUP')
 const task = mongoose.model('TASK')
 mongoose.set('useFindAndModify', false);
exports.createTask = async(req,res)=>{
    try{
        const newTask = new task(req.body)
        await newTask.save()
                        .then(()=>{
                            res.send(req.body)
                        })
    }
    catch(error){
         res.send(error)
    }

}
exports.findAllTasks = async(req,res)=>{
    await task.find({})
                .then((task)=>{
                    res.json(task)
                })
}
exports.findAllGroups = async(req,res)=>{
    await group.find({})
                .then((item)=>{
                    res.json(item)
                })
}
exports.findAllUsers = async(req,res)=>{
    await user.find({})
                .then((item)=>{
                    res.json(item)
                })
}
exports.findAllComments = async(req,res)=>{
    await comment.find({})
                .then((item)=>{
                    res.json(item)
                })
}
exports.findOneTask = async(req,res)=>{
    const id = req.params.id
    await task.findOne({_id: id})
                .then((item)=>{
                    //  res.json(item)
                    item = new task(req.body)
                    item.save()
                    res.json(item)
                })
    }
exports.updateOneTask = async(req,res)=>{
    const id = req.params.id
    await task.findOne({_id: id})
                .then((item)=>{
                    //  res.json(item)
                    item = new task(req.body)
                    item.update()
                    res.json(item)
                })
    }

exports.findOneGroup = async(req,res)=>{
    const id = req.params.id
    await group.findById(id)
                .then((group)=>{
                    res.json(group)
                })
    }
