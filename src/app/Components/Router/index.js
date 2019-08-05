import React from 'react';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from '../../ReduxStore/Reducers/rootReducrs'
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger' 
import App from '../App/index'
import {Router,Route} from 'react-router-dom'
import {Redirect} from 'react-router'
import {history} from '../../ReduxStore/history'
import TaskDetails from '../TaskDetails'
import Login from '../Login'


const logger = createLogger({
    collapsed:true
})

const store = createStore(rootReducer,applyMiddleware(thunk,logger));

const Routers = (props)=>{
 return (  
     <Router history={history} >
        <Provider store={store}>
            <Route exact path='/' component= {(App)}/>
            <Route exact path='/task/:id' component= {(TaskDetails)} />
            <Route exact path='/login' component = {Login} />
        </Provider>
    </Router>
 )
}
export default Routers