import React,{useState} from 'react'
import './AdminQuestionsAns.css'
import {logo} from '../../Constant/ImgConstant/ImageConstant'
import AlertMsg from '../AlertMsg/AlertMsg'
import QuestionsForm from '../QuestionsForm/QuestionsForm'

function AdminQuestionsAns() {
  const [viewForm, setViewForm] = useState(false)
  const [viewAlert, setViewAlert] = useState(false)

  return (
    <>
    {viewForm ? 
    <div className='admin_questions_ans_form'>
        <QuestionsForm setViewForm={setViewForm}/>
    </div>:null}

    {viewAlert ? 
    <div className='admin_question_ans_alert_msg'>
        <AlertMsg setViewAlert={setViewAlert}/>
    </div>
    :null}

    <div className='admin_questions_ans'>
        <div className='admin_questions_ans_card_bg'>
            {/* <div  className='admin_questions_ans_card_info' >
              <p>10 Views</p>
              <p>10 Answers</p>
            </div> */}
            <div className='admin_questions_ans_card_qus'>
              <div >
              <h3>Title Questions</h3>
              <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
              <img src={logo}/>
              </div>
              <div className='admin_questions_ans_card_qus_end'>
                <p>10 Like</p>
                <p>10 Views</p>
                <p>10 Answerd</p>
                <p>Date</p>
                {/* <p>See Answer </p> */}
              </div>
              <hr className='admin_questions_ans_hr'/>
              <div className='admin_questions_btn'>
                <p>Edit</p>
                <p>Delete</p>
              </div>

              <div className='admin_questions_ans_card'>
                <h3>Answers</h3>
                <div className='admin_questions_ans_card_item'>
                  <div>
                      <h3>Title Questions</h3>
                      <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
                      <img src={logo}/>
                  </div>
                  {/* <hr/> */}
                  <div className='admin_questions_ans_card_qus_end'>
                      <p>10 Like</p>
                      <p>10 Views</p>
                      <p>Date</p>
                  </div>
                  <hr/>
                  <div className='user_questions_btn'>
                    <p>Edit</p>
                    <p>Delete</p>
                  </div>
                </div>

                <div className='admin_questions_ans_card_item'>
                  <div>
                      <h3>Title Questions</h3>
                      <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
                      <img src={logo}/>
                  </div>
                  <hr/>
                  <div className='admin_questions_ans_card_qus_end'>
                      <p>10 Like</p>
                      <p>10 Views</p>
                      <p>Date</p>
                  </div>
                </div>
              </div>
            </div>
            
        </div>

        
      </div>
      </>
  )
}

export default AdminQuestionsAns