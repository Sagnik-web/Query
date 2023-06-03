import React from 'react'
import {user,lock} from '../../Constant/ImgConstant/ImageConstant'
import './login.css'

function Login() {
  return (
    <div className='login'>
        <h2>USER  LOGIN</h2>
        <p className='login_email'><img src={user}/><input type='text' placeholder='User Email'/></p>
        <p className='login_pass'><input placeholder='Password' type='password'/><img src={lock}/></p>
        <p className='login_btn'>LOGIN</p>
    </div>
  )
}

export default Login