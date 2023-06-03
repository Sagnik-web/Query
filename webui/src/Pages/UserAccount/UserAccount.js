import React,{useState} from 'react'
import AlertMsg from '../AlertMsg/AlertMsg'
import './UserAccount.css'

function UserAccount() {
  const [viewAlert, setViewAlert] = useState(false)

  return (
    <>
     {viewAlert ? 
    <div className='user_account_alert_msg'>
        <AlertMsg setViewAlert={setViewAlert}/>
    </div>
    :null}

    <div className='user_account'>
        <h3>User Details</h3>
        <p>Name: Sagnik Biswas</p>
        <p>Email: Sagnik@hhh.com</p>
        <p>BIO: User Bio</p>
        <p className='user_account_pass'><span>Password: ***************</span> <span className='user_account_pass_edit'>Edit</span></p>
        <p>Created At </p>
        <div className='user_account_delete'><button onClick={()=>setViewAlert(true)}>Delete</button></div>
    </div>
    </>
  )
}

export default UserAccount