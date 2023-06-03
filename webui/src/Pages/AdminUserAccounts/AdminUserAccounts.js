import React,{useState} from 'react'
import AlertMsg from '../AlertMsg/AlertMsg'
import './AdminUserAccounts.css'

function AdminUserAccounts() {
  const [viewAlert, setViewAlert] = useState(false)

  return (
    <>
     {viewAlert ? 
    <div className='admin_user_alert_msg'>
        <AlertMsg setViewAlert={setViewAlert}/>
    </div>
    :null}

    <div className='admin_user_account'>
        <h3>admin_User Details</h3>
        <p>Name: Sagnik Biswas</p>
        <p>Email: Sagnik@hhh.com</p>
        <p>BIO: admin_User Bio</p>
        <p className='admin_user_account_pass'><span>Role: Admin</span> <span className='admin_user_account_pass_edit'>Edit</span></p>
        <p className='admin_user_account_pass'><span>Password: ***************</span> <span className='admin_user_account_pass_edit'>Edit</span></p>
        <p>Created At </p>
        <div className='admin_user_account_delete'><button onClick={()=>setViewAlert(true)}>Delete</button></div>
    </div>
    </>
  )
}

export default AdminUserAccounts