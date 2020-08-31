import React from "react";
import { withRouter } from "react-router-dom";
import './About.css';
import TopWave from '../../assets/intro-top-wave.svg';
import BottomWave from '../../assets/intro-bottom-wave.svg';
import Video from "../../assets/video.svg";
import Illustration from "../../assets/illustration.svg";
import Problems from "../../assets/Problems.svg";
import Doc from "../../assets/Doc.svg";
import Code from "../../assets/Code.svg";
import Discord from "../../assets/Discord.svg";
import Modal from "./Modal.jsx";
import { Link } from "react-router-dom";


const About = () => {
  return(
    <div>
    <img className="top-wave" src={TopWave}/>
    <div className="about-box">
      <div className="about-title">
      <h2>About IJS</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde labore aspernatur harum alias, enim deserunt odio omnis officia sit vero. Aperiam dolorem modi neque.</p>
      </div>
        <div className="vid-desc">
          <img className="icons" src={Video}/>
          <Link
            to={{
              pathname: 'modal/1',
              state: {modal: true}
            }}>
              Open Modal
            </Link>
          <h4>Video Description</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
        </div>
        <div className="illu">
          <img className="icons" src={Illustration}/>
          <h4>Illustrations</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
        </div>
        <div className="doc-code">
          <img className="icons" src={Doc}/>
          <h4>Documented Code</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
        </div>
        <div className="about-5">
          <img className="icons" src={Code}/>
          <h4>Video Description</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
        </div>
        <div className="about-6"> 
          <img className="icons" src={Discord}/>
          <h4>Video Description</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
        </div>
        <div className="probs">
          <img className="icons" src={Problems}/>
          <h4>100+ Problems</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
        </div>
    </div>
    <img src={BottomWave}/>
    </div>

  )
}

export default About;