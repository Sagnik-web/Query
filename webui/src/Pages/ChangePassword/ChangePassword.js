import React from 'react'
import { user, lock, emailLogo} from '../../Constant/ImgConstant/ImageConstant'
import './ChangePassword.css'

function ChangePassword() {
  return (
    <div className='change_password'>
        <h2>Change Password</h2>
        <p><img src={lock}/><input placeholder='Password'/></p>
        <p><img src={lock}/><input placeholder='New Password'/></p>
        <p><img src={lock}/><input placeholder='Confirm Password'/></p>
        <p className='change_password_btn'>Submit</p>
    </div>
  )
}

export default ChangePassword