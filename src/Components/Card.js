import React from 'react';
import './Card.css';
export default function Card() {
  return (
    <div className="cardBox">
      <div id="indBox1">
        <div className="img-container ">
          <p>
            <img src={require('./Play.png')} id="c2" alt="jjj" />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <div className="">
          <p className="cardTitle">Speaking clubs</p>
        </div>
        <div className="">
          <p className="cardBody">
            In our school you will practice <br /> your speaking skills and just
            get <br />a lot of positive emotions!
          </p>
        </div>
      </div>

      <div id="indBox2">
        <div className="img-container">
          <p>
            <img src={require('./play2.png')} id="c2" alt="jjj" />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <div className="">
          <p className="cardTitle">Quality control</p>
        </div>
        <div className="">
          <p className="cardBody">
            A huge work has been done with <br /> the teachers and their work
            has <br /> been monitored thoroughly.
          </p>
        </div>
      </div>

      <div id="indBox3">
        <div className="img-container">
          <p>
            <img style={{align: 'middle'}}src={require('./play3.png')} id="c2" alt="jjj" />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <div className="">
          <p className="cardTitle">Progress analysis</p>
        </div>
        <div className="">
          <p className="cardBody">
            The CEF of Reference has been used <br /> at our school. It allows
            to control our <br /> students’ success in studying.
          </p>
        </div>
      </div>
    </div>
  );
}
