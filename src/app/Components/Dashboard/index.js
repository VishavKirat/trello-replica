import React from 'react'
import {connect} from 'react-redux'
import Tasks from '../Tasks'
import {Redirect} from 'react-router'
import {requestAddNewTask,requestGetAllTasks} from '../../ReduxStore/Actions'
class Dashboard extends React.Component{
    // if(!props.session.authentication){
    //     return <Redirect to='/login'/>
    // }
    render(){
        return (
            <div className="dashboard">
                {console.log(this.props.tasks)}
                <h3>{this.props.name}</h3>
                <div>
                    {this.props.tasks.map(task=> <Tasks key={task._id} id={task._id} name={task.name}/>)}
                    <button onClick={()=>this.props.createNewTask(this.props._id)}>Add</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps=({tasks,session},ownProps)=>{
    let groupId = ownProps.id;
    return {
        name: ownProps.name,
        id : groupId,
        tasks:tasks.filter(task=>task.group === groupId),
        session: session
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return (
       {
        createNewTask : (id) => dispatch(requestAddNewTask(id)),
       
        }
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
