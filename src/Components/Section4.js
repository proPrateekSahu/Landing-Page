import React from 'react';
import './Section4.css';
export default function Section4() {
  return (
    <>
      <div className="section4">
        <div className="container4">
          <p id="psec4a">TOP STUDIYING</p>
          <p id="psec4b">Our students say</p>
        </div>
        <div className="studentText">
          <div id='studA'>
            <img
              
              id="studentimg"
              src={require('./student.png')}
              alt=""
            />
          </div>
          <div className="review">
            <div className="name">
              <div>Martin Watson</div>
              <div className="flagdesc">
                <div className="flag1">
                  <img id="img1" src={require('./Flag.png')} alt="" />
                </div>
                <div className="textCourse">B2 course student</div>
              </div>
            </div>
            <div className="section4b">
            <p style={{letterSpacing: "2px"}}>
            There is no way I could have made the same <br /> progress learning Spanish without using Lingua. <br /> The best part is now learning Spanish has <br /> become one of my biggest hobbies.
            </p>
            <div id="slider">
                <img src={require('./slider.png')} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
