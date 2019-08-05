import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {requestChangeTaskTitle,requestChangeTaskStatus,requestChangeTaskGroup} from '../../ReduxStore/Actions'

class TaskDetails extends React.Component{
    state = {
        input:this.props.task.name,
        status: this.props.isComplete,
        group: this.props.task.group
    }
    handleInputChange = (e)=>{
        this.setState({
            input: e.target.value
        })
    }
    handleUpdateButton= (e)=>{
        e.preventDefault();
        this.props.changeTaskTitle(this.props.task.id, this.state.input)
        this.props.changeTaskStatus(this.props.id,this.state.status)
        this.props.changeTaskGroup(this.props.id,this.state.group)
    }
    handleStatusButtonClick = (e)=>{
         e.preventDefault();
        
        this.setState(prevStat=>{
            return {
                ...this.state,
                status: !prevStat.status
            }
        }) 
    }
    handleGroupSelection = (e)=>{
        e.preventDefault();
        this.setState({
            group: e.target.value
        })
    }
    render(){
        let {task,groups,isComplete,changeTaskStatus} = this.props
        return (
            <div className="tasks">
                {/* <h2>{task.name}</h2>   */}
                <div>
                    <input type="text" defaultValue={task.name} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <button onClick={this.handleStatusButtonClick}>{this.state.status ? 'Reopen' : 'Complete'}</button>
                </div>
                <div>
                    <select onChange={this.handleGroupSelection}>
                        {groups.map(group=>(
                            <option key={group.id} value={group.id} >{group.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button onClick={this.handleUpdateButton}>
                        <Link to='/'> Done </Link>
                    </button>
                </div>
            </div>
            
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    let id = ownProps.match.params.id

    let task = state.tasks.find(task=> task.id === id)
    return ({
        id: id,
        task : task ,
        groups : state.groups,
        isComplete : task.isComplete
    })
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    let id = ownProps.match.params.id
    return {
        changeTaskTitle : (id,title) => dispatch(requestChangeTaskTitle(id,title)),
        changeTaskStatus : (taskId,status) => dispatch(requestChangeTaskStatus(taskId,status)),
        changeTaskGroup: (taskId,groupId) => dispatch(requestChangeTaskGroup(taskId,groupId))
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskDetails);
