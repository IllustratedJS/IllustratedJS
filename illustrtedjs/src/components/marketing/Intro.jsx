import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import computer from '../../assets/lotties/Computer.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: computer,
    rendererSettings: {
      className: 'computer'
      // preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="intro-box">
      <div className="introText" data-aos="fade-left" data-aos-once="true">
        <p className="pre-header">
          THE <span className="introColor"> JAVASCRIPT</span> COMPUTER SCIENCE
          PLATFORM
        </p>
        <h1 className="introTitle">Reshape your learning</h1>
        <p className="intro-paragraph">
          Computer Science for those without a math and engineering degree.
          Learn skills to transform your applications, improve performance and
          crush your interview. Watch complex structures transform into life
          with examples you can relate to. Get started now with illustrative
          examples, detailed notes, code snippets, video demos and more.
        </p>
        <a href="#curriculum" className="intro-button">
          Curriculum
        </a>
      </div>
      <div className="computer-box" data-aos="fade-right" data-aos-once="true">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Intro;
