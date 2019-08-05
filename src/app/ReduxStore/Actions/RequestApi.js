import axios from 'axios'

export const taskRequestApi= ()=>{
    return (dispatch)=>{
        axios.get('http://localhost:7777/api/tasks')
            .then(response=>{
                console.log(response)
                return response
            })
    }
}