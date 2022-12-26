import React from 'react';
import './navbar.css';

export default function Header() {
  return (
    <>
      <div className="section1">
        <div className="App-header">
          <div className="companylogo">
          <img id="lg1" src={require('./Rectangle11825.png')} alt="" />
          <img id="lg2" src={require('./Rectangle11824.png')} alt="" />
          </div>
          

          <div id="companyName">Lingua</div>
          <div id="middleNav">
            <ul>
              <li a="">Courses</li>
              <li a="">About Us</li>
              <li a="">Teachers</li>
              <li a="">Pricing</li>
              <li a="">Careers</li>
              <li a="">Blog</li>
            </ul>
          </div>
          <div className="navLast">
            <div id="navl">Get Started</div>
          </div>
        </div>
        <div id="section1img">
          <img src={require('./section1img.png')} alt="" />
        </div>
        <div className="containerSect1">
          <div className="">
            <div className="text1">
              A <span id="uniqueText">unique</span> approach <br /> to learning
              foreign <br /> languages online
            </div>
            <div className="text2">
              Learn at your own pace, with lifetime <br /> access on mobile and
              desktop
            </div>
          </div>
          <div className="btn">
            <p id="trig">Get Started</p>
          </div>
        </div>
      </div>
    </>
  );
}
