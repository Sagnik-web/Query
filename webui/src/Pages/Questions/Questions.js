import React, { useEffect } from 'react'
import axios from 'axios'
import './Questions.css'
import {logo} from '../../Constant/ImgConstant/ImageConstant'
import {Favorite,FavoriteBorder} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
// import Request from '../../Api/RequestsFun'
// import apiConstrant from '../../Api/ApiConstrant'

function Questions() {

  let navigate = useNavigate()

  useEffect( ()=>{
    // Request(apiConstrant.questions,'get','','')
    // axios.get(apiConstrant.questions,{withCredentials:true})
    //         .then(res=>{
    //             console.log(res);
    //         })
    //         .catch(err=>{
    //             return err
    //         })
    // console.log(allData);
  },[])

  return (
    <div className='questions'>
        {/* <div className='questions_container'> */}
          <h3>All Querys</h3>
          <div className='questions_items'>
            <p>Most Answered</p>
            <p>Most Views</p>
            <p>Liked</p>
            <p>Newest</p>
            <p>No Answered</p>
          </div>
          <div className='questions_search'>
            <p className='questions_search_input'><input placeholder='Search Tags'/></p>
            <p className='questions_search_btn'>Search</p>
          </div>
          <hr className='questions_hr'/>
        {/* </div> */}
        
        <div className='questions_card_bg'>
            <div  className='questions_card_info' onClick={()=>{navigate('/questionAns')}}>
              <p>10 Views</p>
              <p>10 Answers</p>
            </div>
            <div className='questions_card_qus' >
              <div onClick={()=>{navigate('/questionAns')}}>
              <h3>Title Questions</h3>
              <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
              <img src={logo}/>
              </div>
              <hr/>
              <div className='questions_card_qus_end'>
                <p className='questions_card_qus_end_like'><span>10</span><span><Favorite/></span><span> <FavoriteBorder/></span></p>
                <p>Date</p>
                <p onClick={()=>{navigate('/questionAns')}}>See Answer </p>
              </div>
            </div>
        </div>

        <div className='questions_card_bg'>
            <div  className='questions_card_info'>
              <p>10 Views</p>
              <p>10 Answers</p>
            </div>
            <div className='questions_card_qus'>
              <h3>Title Questions</h3>
              <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
              <img src={logo}/>
              <div>
                <p>10 Like</p>
                <p>Date</p>
              </div>
            </div>
        </div>

        <div className='questions_card_bg'>
            <div  className='questions_card_info'>
              <p>10 Views</p>
              <p>10 Answers</p>
            </div>
            <div className='questions_card_qus'>
              <h3>Title Questions</h3>
              <p>Question Description I need to replace all characters with nothing before the . character and also replace all [ and ] with nothing. Please see examples below: from to [PINWHEEL_ASSET].[MX5530] MX5530</p>
              <img src={logo}/>
              
              <div>
                <p>10 Like</p>
                <p>Date</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Questions