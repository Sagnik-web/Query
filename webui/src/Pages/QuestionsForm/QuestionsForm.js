import React from 'react'
import './QuestionsForm.css'

function QuestionsForm({setViewForm, title, setTitle}) {
  return (
    <div className='questions_form'>
        <p>
            <input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </p>
        <p>
            <textarea placeholder='Question Description'/>
        </p>
        <p>
           <input type='file' id="questions_form_file"/>
           <button className='upload_btn'>Upload</button>
        </p>
        <p className='questions_form_img'>
            <img/>
        </p>
        <p className='submit_btn'>
           <button onClick={()=>(setViewForm(false), setTitle(''))}>Cancel</button>
           <button>Submit</button>
        </p>
    </div>
  )
}

export default QuestionsForm