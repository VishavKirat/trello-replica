import React from 'react'

const Login = (props)=>{
    return (
        <div className="login">
            <form>
                <label htmlFor="name"> Login
                    <input type="text" />
                </label>
                <label htmlFor="password">
                    password
                    <input type="password"/>
                </label>
            </form>
        </div>
    )
}
export default Login