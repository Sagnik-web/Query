import React from 'react'
import './QuestionsAns.css'
import {Favorite,FavoriteBorder} from '@mui/icons-material'
import {logo} from '../../Constant/ImgConstant/ImageConstant'

function QuestionsAns() {
  return (
    <div className='questions_ans'>
        <div className='questions_ans_card_bg'>
            {/* <div  className='questions_ans_card_info' >
              <p>10 Views</p>
              <p>10 Answers</p>
            </div> */}
            <div className='questions_ans_card_qus'>
              <div >
              <h3>Title Questions</h3>
              <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
              <img src={logo}/>
              </div>
              <div className='questions_ans_card_qus_end'>
                <p>10 Like</p>
                <p>10 Views</p>
                <p>10 Answerd</p>
                <p>Date</p>
                {/* <p>See Answer </p> */}
              </div>
              <hr/>


              <div className='questions_ans_card'>
                <h3>Answers</h3>
                <div className='questions_ans_card_item'>
                  <div>
                      <h3>Title Questions</h3>
                      <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
                      <img src={logo}/>
                  </div>
                  <hr/>
                  <div className='questions_ans_card_qus_end'>
                      <p>10 Like</p>
                      <p>10 Views</p>
                      <p>Date</p>
                  </div>
                </div>

                <div className='questions_ans_card_item'>
                  <div>
                      <h3>Title Questions</h3>
                      <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
                      <img src={logo}/>
                  </div>
                  <hr/>
                  <div className='questions_ans_card_qus_end'>
                      <p>10 Like</p>
                      <p>10 Views</p>
                      <p>Date</p>
                  </div>
                </div>
              </div>
            </div>
            
        </div>

        
      </div>
  )
}

export default QuestionsAns