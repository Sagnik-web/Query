import React from 'react'
import './Navber.css'
import {MenuOutlined} from '@mui/icons-material'
import {Avatar} from '@mui/material'
// import search from '../../Accets/Img/search.svg'
import {avater, logo, search, dropdown} from '../../Constant/ImgConstant/ImageConstant'
import { Link, useNavigate } from 'react-router-dom'

function Navber() {
  let navigation = useNavigate()

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <>
    <div id="myNav" className="overlay">
      <a className="closebtn" onClick={closeNav}>&times;</a>
      <div className="overlay-content">
        <Link to='/'  onClick={closeNav}>Home</Link>
        <Link to='/question'  onClick={closeNav}>Questions</Link>
        <Link to='/about'  onClick={closeNav}>About</Link>
        <Link to='/'  onClick={closeNav}>Insta</Link>
        <Link to='/'  onClick={closeNav}>Facebook</Link>
      </div>
    </div>

    <div className='nav_bg'>
      <div className='nav'>
        <div className='nav_section'>
          <MenuOutlined style={{color:'#fff', marginTop:'3px'}}  onClick={openNav} fontSize='large'  />
          <img src={logo} alt=''/>
        </div>
        <div className='nav_section nav_section_search '>
          <input placeholder='Search'/>
          <p ><img src={search}/></p>
        </div>
        {/* <div className='nav_section'>
          <button onClick={()=>navigation('/signup')}>Signup</button>
          <button className='nav_section_login' onClick={()=>navigation('/login')}>Login</button>
        </div> */}
        <div className='nav_dropdown'>
        <div className='nav_avater'>
          {/* <p> */}
            <Avatar src={avater} alt="" sx={{ width: 40, height: 40 }} />
          {/* </p> */}
            <p>Name Sagnik</p>
            <p className='dropdown_img'><img src={dropdown}/></p>
        </div>
        <div  className='nav_avater_dropdown'>
          <p onClick={()=>navigation('/userAccount')}>User Account</p>
          <p onClick={()=>navigation('/userQuestion')}> User Questions</p>
          <p onClick={()=>navigation('/userAns')}> User Ans</p>
          <p>Logout</p>
        </div>
        </div>
      </div>
    </div>

    <div className='nav_bg_static'></div>
    
    </>
  )
}

export default Navber