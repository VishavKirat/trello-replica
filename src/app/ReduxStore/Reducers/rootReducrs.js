import { combineReducers } from 'redux'
import axios from 'axios'
import {initState} from '../../../server/initState'
import {TYPES} from '../Actions'
import {tasks} from './TaskReducer'


export const rootReducer = combineReducers({
    groups: (groups = initState.groups,action)=>{
        return groups
    },
    comments: (comments = initState.comments,action)=>{
    return comments
    },
    users: (users = initState.users,action)=>{
        return users
    },
    session: (session = initState.session,action)=>{
        return session
    },
    tasks
})
