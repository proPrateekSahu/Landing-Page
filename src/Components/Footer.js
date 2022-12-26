import React from 'react';
import './footer.css';
import Logo from './Logo';
export default function Footer() {
  return (
    <>
      <div className="footer-box ">
        <div id="footerbox1" >
          <div id="ftbox1a" >
            <Logo />
          </div>
          <div id="ftbox">
            20 Osgood Rd, Milford, NH 03055, USA <br />
            +1283871239190213021
          </div>
          <div id="ftbox2">
            <div id="ftbox2a">
              <span className='blackc'>Company</span>
            </div>
            <div>
              <ul id="foot-mid-1">
                <li className="footmid1">Carrers</li>
                <li className="footmid1">Teachers</li>
                <li className="footmid1">Support</li>
                <li className="footmid1">Contact</li>
                
              </ul>
            </div>
          </div>
          <div id="ftbox2">
            <div id="ftbox2a">Product</div>
            <div>
              <ul id="foot-mid-1">
                <li className="footmid1">Courses</li>
                <li className="footmid1">Pricing</li>
                <li className="footmid1">Blog</li>
                
              </ul>
            </div>
          </div>
          <div id="ftbox2">
            <div id="ftbox2a">Legal</div>
            <div>
              <ul id="foot-mid-1">
                <li className='footmid1'>Terms & Conditions</li>
                <li className='footmid1'>Privacy policy</li>
              </ul>
            </div>
          </div>

          <div id="socialbox" >
          <img src={require('./social1.png')} alt="" />
              <img src={require('./social2.png')} alt="" />
            <img src={require('./social3.png')} alt="" />
            
          </div>

        </div>
      </div>

      
      
    </>
  );
}
