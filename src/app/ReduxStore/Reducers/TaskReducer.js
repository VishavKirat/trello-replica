
// import {initState} from '../../../server/initState'
import axios from 'axios'
import {TYPES} from '../Actions'
const initState = {
    tasks: []
}
export const tasks = (tasks=initState.tasks ,action)=>{
    switch(action.type){
        case TYPES.REQUEST_ADD_NEW_TASK : return [...tasks,action.payload];
        case TYPES.REQUEST_CHANGE_TASK_TITLE : return [...tasks.map(task=>{ return (task.id === action.payload.id) ? {...task, name: action.payload.title} : task})];
        case TYPES.REQUEST_CHANGE_TASK_STATUS : return [...tasks.map(task=>{return (task.id === action.payload.id ? {...task, isComplete: action.payload.status} : task)})];
        case TYPES.REQUEST_CHANGE_TASK_GROUP : return [...tasks.map(task=>{return (task.id === action.payload.id ? {...task, group: action.payload.groupId} : task)})];
        case TYPES.REQUEST_GET_ALL_TASKS_SUCCESS: return [...tasks,...action.payload]
        default: return tasks
    }
  
}
