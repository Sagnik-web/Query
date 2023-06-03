import React, { useState } from 'react'
import {logo} from '../../Constant/ImgConstant/ImageConstant'
import AlertMsg from '../AlertMsg/AlertMsg'
import QuestionsForm from '../QuestionsForm/QuestionsForm'
import './AdminQuestions.css'

function AdminQuestions() {


  const [title, setTitle] = useState('')
  const [viewForm, setViewForm] = useState(false)
  const [viewAlert, setViewAlert] = useState(false)


  const editFun = (newTitle)=>{
    setTitle(newTitle)
    setViewForm(true)
  }
  return (
    <>
    {viewForm ? 
    <div className='admin_questions_form'>
        <QuestionsForm setViewForm={setViewForm} title={title} setTitle={setTitle}/>
    </div>:null}

    {viewAlert ? 
    <div className='admin_question_alert_msg'>
        <AlertMsg setViewAlert={setViewAlert}/>
    </div>
    :null}

    <div className='admin_questions'>
        {/* <div className='admin_questions_container'> */}
          <h3><p>admin Querys</p><p className= 'admin_questions_ask_btn' onClick={()=>(setViewForm(!viewForm),setTitle(''))}>Ask Question</p></h3>
          <div className='admin_questions_items'>
            <p>Most Answered</p>
            <p>Most Views</p>
            <p>Liked</p>
            <p>Newest</p>
            <p>No Answered</p>
          </div>
          
          <hr className='admin_questions_hr'/>
        {/* </div> */}
        
        <div className='admin_questions_card_bg'>
            <div  className='admin_questions_card_info'>
              <p>10 Views</p>
              <p>10 Answers</p>
            </div>
            <div className='admin_questions_card_qus'>
              <div>
              <h3>Title Questions</h3>
              <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
              <img src={logo}/>
              </div>
              {/* <hr/> */}
              <div className='admin_questions_card_qus_end'>
                <p>10 Like</p>
                <p>Date</p>
                <p>See Answer </p>
              </div>
              <hr/>
              <div className='admin_questions_btn'>
                <p onClick={()=>editFun("Edited Title") }>Edit</p>
                <p onClick={()=>setViewAlert(true)}>Delete</p>
              </div>
            </div>
        </div>

        <div className='admin_questions_card_bg'>
            <div  className='admin_questions_card_info'>
              <p>10 Views</p>
              <p>10 Answers</p>
            </div>
            <div className='admin_questions_card_qus'>
              <div>
              <h3>Title Questions</h3>
              <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
              <img src={logo}/>
              </div>
              {/* <hr/> */}
              <div className='admin_questions_card_qus_end'>
                <p>10 Like</p>
                <p>Date</p>
                <p>See Answer </p>
              </div>
              <hr/>
              <div className='admin_questions_btn'>
                <p>Edit</p>
                <p>Delete</p>
              </div>
            </div>
        </div>
        </div>
        
        </>
  )
}

export default AdminQuestions