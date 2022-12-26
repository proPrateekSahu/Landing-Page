import React from 'react';
import './section3.css';

export default function Section3() {
  return (
    <div className="section3">
      <div id="teacher1">
        <div id="mask1">
          <img src={require('./Mask1.png')} alt="" />
        </div>
        <div id="title1">
          <img id="ellpse1" src={require('./Ellipse3.png')} alt="" />
          <div id="wallet1">Christian Howard</div>
          <div id="walletdesc">Italian teacher</div>
        </div>
      </div>
      <div id="teacher2">
        <div id="mask2">
          <img src={require('./Mask2.png')} alt="" />
        </div>
        <div id="title2">
          <img id="ellpse1" src={require('./Ellipse1.png')} alt="" />
          <div id="wallet1">Sandra Wilson</div>
          <div id="walletdesc">Spanish teacher</div>
        </div>
      </div>
      <div id="teacher3">
        <div id="mask3">
          <img src={require('./Mask3.png')} alt="" />
        </div>
        <div id="title3">
          <img id="ellpse1" src={require('./Ellipse2.png')} alt="" />
          <div id="wallet1">Jimmy Cooper</div>
          <div id="walletdesc">English teacher</div>
        </div>
      </div>
      <div id="texttop">
        <div id="txttop1">key persons</div>
        <div id="txttop2">Meet our teachers</div>
      </div>
      <div id="arrow1">
        <img src={require('./Iconbt1.png')} alt="" />
      </div>
      <div id="arrow2">
      <img src={require('./Iconbt2.png')} alt="" />
      </div>
    </div>
  );
}
