import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Curriculum.css';
import TopWave from '../../assets/intro-top-wave.svg';
import BottomWave from '../../assets/intro-bottom-wave.svg';
import Books from '../../assets/books.svg';

const Curriculum = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  })
  return (
    <div>
      <img className='top-wave' src={TopWave} />
      <div className="curriculum-box">
        <a name="curriculum"></a>
        <div className="curriculum-title">
          <h2>Curriculum</h2>
          <p>
          We're on a mission to change the way you think and learn about computer science. 
          Don't spend another minute looking through threads for solutions or watching multiple 
          videos just to try to piece together complex.
          </p>
        </div>
        <div className="curr-topics">

        <div className="ds" data-aos='fade-right'>
          <h5>Data Science</h5>
          <p>Whether stacks, queues or lists, data science is a common topic for technical interviews.</p>
        </div>
        <div className="algo" data-aos='fade-right' data-aos-delay="200">
          <h5>Algorithms</h5>
          <p>Get a better grasp on the heavy lifting math equations. Our algorithm course will walk you through with confidence.</p>
        </div>
        <div className="ajs" data-aos='fade-right' data-aos-delay="300">
          <h5>Advanced JavaScript</h5>
          <p>The fundamentals of JS is not the finish line. Expand the depth of your knowledge of the popular programming language.</p>
        </div>
        </div>
        <div className="curr-lottie" data-aos='fade-left'>

        </div>
        {/* <img className="books" src={Books} /> */}
      </div>
      <img className='bottom-wave' src={BottomWave} />
    </div>
  );
};

export default Curriculum;
