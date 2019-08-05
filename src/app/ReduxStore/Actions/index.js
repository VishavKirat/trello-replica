import uuid from 'uuid'
import axios from 'axios'
import { Types } from 'mongoose';

const url = "http://localhost:7777/api"

export const TYPES = {
    REQUEST_ADD_NEW_TASK: 'REQUEST_ADD_NEW_TASK',
    REQUEST_CHANGE_TASK_TITLE: 'REQUEST_CHANGE_TASK_TITLE',
    REQUEST_CHANGE_TASK_GROUP: 'REQUEST_CHANGE_TASK_GROUP',
    REQUEST_CHANGE_TASK_STATUS: 'REQUEST_CHANGE_TASK_STATUS',
    REQUEST_GET_ALL_TASKS_SUCCESS : 'REQUEST_GET_ALL_TASKS_SUCCESS'
}
export const requestGetAllTasks = () =>{
    // dispatch({type:'REQUEST_GET_ALL_TASKS' })
    return async(dispatch) =>{
        await axios.get('http://localhost:7777/api/tasks')
                .then(res=> {
                    dispatch({type:TYPES.REQUEST_GET_ALL_TASKS_SUCCESS,payload: res.data})
                })
    }
}
export const requestAddNewTask = (id)=>{
    return (dispatch) => (
        dispatch({
            type:TYPES.REQUEST_ADD_NEW_TASK,
            payload:{
                id: uuid(),
                name:`task-${uuid()}`,
                group:id,
                owner:"U1",
                isComplete:false,
            }
        },
        axios.post(url+'/tasks/new',{
            id: uuid(),
                name:`task-${uuid()}`,
                group:id,
                owner:"U1",
                isComplete:false,
        })
        )
    )
}
export const requestChangeTaskTitle = (id,title)=>{
    return (dispatch)=> (
        dispatch( {
            type: TYPES.REQUEST_CHANGE_TASK_TITLE,
            payload:{
                id: id,
                title: title
            }
        },axios.post(url+'/tasks/update/:'+id,{
            id: id,
            title: title
        })
    )
)}
export const requestChangeTaskGroup = (id,groupId)=>{
    return {
        type: TYPES.REQUEST_CHANGE_TASK_GROUP,
        payload: {
            id: id,
            groupId: groupId
        }
    }
}
export const requestChangeTaskStatus = (id,status)=>{
    return {
        type: TYPES.REQUEST_CHANGE_TASK_STATUS,
        payload:{
            id: id,
            status : status
        }
    }
}