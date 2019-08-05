import React from 'react'
import {connect} from 'react-redux'
import Dashboard from '../Dashboard'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import {requestAddNewTask,requestGetAllTasks} from '../../ReduxStore/Actions'
//  import {taskRequestApi} from '../../ReduxStore/Actions/RequestApi'
class App extends React.Component{

    componentDidMount(){
        return this.props.displayAlltasks()
    }
    render(){
        return (
            <div className="App">
            {
                this.props.groups.map((group)=>{
                    return  <Dashboard key={group.id} id={group.id} name= {group.name}/>
                })
            }
            </div>
        )
    }
}
const mapStateToProps = ({groups})=>{
    return ({
        groups: groups,
        
    })
}
const mapDispatchToProps = (dispatch)=>{
    return ({
        displayAlltasks :() => dispatch(requestGetAllTasks())
    })
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
