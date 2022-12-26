import React from 'react'
import './Section5.css'
export default function Section5() {
  return (
    <>
    <div className='Section5'>
      <div id="boxa" >
        <div id="boxa1">MORE INFO</div>
        <div id="boxa2">Common questions</div>
        <div id="faq1">
        <div className="addbtn">
          <img src={require('./minus.png')} alt="" />
        </div>
          <div id="faq-1">How the first lesson with teacher will be?</div>
          <p id="faq-2">By the end of the trial lesson, you will be able to <br /> determine for yourself whether this kind of online lesson <br /> is right for you or not. In our experience, most students <br /> appreciate the benefits of online education and decide <br /> to study online.</p>
        </div>
        <div id="faq2">
          <p  className="faq-3">Are you adjusting to the student's schedule?</p>
          <div className="addbtn">
          <img src={require('./plus.png')} alt="" />
        </div>
        </div>
        <div id="faq3">
        <p  className="faq-3">Do I need to buy materials for lessons?</p>
        <div className="addbtn">
          <img src={require('./plus.png')} alt="" />
        </div>
        </div>
        <div id="faq4">
        <p  className='faq-3'>What is the maximum group size?</p>
        <div className="addbtn">
          <img src={require('./plus.png')} alt="" />
        </div>
        </div>
        <div id="faq5">
        <p  className="faq-3">Can I do it individually or only in a group?</p>
        <div className="addbtn">
          <img src={require('./plus.png')} alt="" />
        </div>
        </div>
        <div id="faq6">
        <p  className='faq-3'>How can I know my level of knowledge?</p>
        <div className="addbtn">
          <img src={require('./plus.png')} alt="" />
        </div>
        </div>
        
      </div>
      
    </div>
    </>
    
  )
}
