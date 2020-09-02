import React, { useState } from "react";
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
            <Modal 
              activate = {({setIsVisible}) => (
                <div className="vid-desc" type="button"
                onClick={() => {
                  setIsVisible(true)
                }}>
                  <img className="icons" src={Video}/>
                  <h4>Video Description</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
                </div>
              )}> 
                <h4>Video Description</h4>
                <p> Hi </p>
              </Modal>
            <Modal 
              activate = {({setIsVisible}) => (
                <div className="illu" type="button"
                onClick={() => {
                  setIsVisible(true)
                }}>
                  <img className="icons" src={Illustration}/>
                  <h4>Illustrations</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
                </div>
              )}> 
                <h4>Illustrations</h4>
                <p> Hi </p>
              </Modal>
            <Modal 
              activate = {({setIsVisible}) => (
                <div className="doc-code" type="button"
                onClick={() => {
                  setIsVisible(true)
                }}>
                  <img className="icons" src={Doc}/>
                  <h4>Documented Code</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
                </div>
              )}> 
                <h4>Documented Code</h4>
                <p> Hi </p>
              </Modal>
              <Modal 
                activate = {({setIsVisible}) => (
                  <div className="probs" type="button"
                  onClick={() => {
                    setIsVisible(true)
                  }}>
                    <img className="icons" src={Code}/>
                    <h4>100+ Problems</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cum repellat, ullam nesciunt nam unde</p>
                  </div>
                )}> 
                  <h4>100+ Problems</h4>
                  <p> Hi </p>
                </Modal>
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