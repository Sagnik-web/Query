import React from 'react'
import { user, lock, emailLogo} from '../../Constant/ImgConstant/ImageConstant'
import './Signup.css'

function Signup() {
  return (
    <div className='signup'>
        <h2>USER  SIGNUP</h2>
        <p><img src={user}/><input type='text' placeholder='Name'/></p>
        <p><img src={emailLogo}/><input type='text' placeholder='Email'/></p>
        <p><img src={lock}/><input type='password' placeholder='Password'/></p>
        <p><img src={lock}/><input type='password' placeholder='Confirm Password'/></p>
        <p className='signup_btn'>SIGNUP</p>
    </div>
  )
}

export default Signup