import React from 'react'
import './section6.css'

export default function Section6() {
  return (
    <>
    <div className='section6'>
        <div id="section6box" >
            <div id="t1">Get a free trial lesson today</div>
            <div id="t2">Start fulfilling your language dreams with our school</div>
        </div>
        <div id="formbox" >
            <div id="formboxa" >
                <p id='formboxa1'>Enter your email</p>
            </div>
            <div id="submitbn" >
                <img src={require('./formbtn.png')} alt="" />
            </div>
        </div>
    </div>
    </>
    
  )
}
