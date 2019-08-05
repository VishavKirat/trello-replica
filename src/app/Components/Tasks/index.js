import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const Tasks = ({id,name})=>{
    return (
        <div className="tasks">
           <NavLink to={`/task/${id}`}>{name}</NavLink>
        </div>
    )
}

export default connect()(Tasks);
