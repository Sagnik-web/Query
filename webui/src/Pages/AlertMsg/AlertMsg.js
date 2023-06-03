import React from 'react'
import './AlertMsg.css'

function AlertMsg({setViewAlert}) {
  return (
    <div className='alert_msg'>
        <h3>Delete</h3>
        <p>All items in the trash will be deleted forever and you won't be able to restore them.</p>
        <div><button onClick={()=>setViewAlert(false)}>Cancel</button><button>OK</button></div>
    </div>
  )
}

export default AlertMsg