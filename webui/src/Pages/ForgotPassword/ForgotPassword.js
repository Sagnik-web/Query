import React from 'react'
import {user,lock} from '../../Constant/ImgConstant/ImageConstant'
import './ForgotPassword.css'

function ForgotPassword() {
  return (
    <div className='forgot_password'>
        <h2>FORGOT PASSWORD</h2>
        <p className='forgot_password_email'><img src={user}/><input type='text' placeholder='User Email'/></p>
        {/* <p className='forgot_password_pass'><input placeholder='Password' type='password'/><img src={lock}/></p> */}
        <p className='forgot_password_btn'>SUBMIT</p>
    </div>
  )
}

export default ForgotPassword