import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Curriculum.css';
import TopWave from '../../assets/intro-top-wave.svg';
import BottomWave from '../../assets/intro-bottom-wave.svg';
import dataImage from '../../assets/Data Science@4x-100.jpg';
import algoImage from '../../assets/Algorithm@4x-100.jpg';
import jsImage from '../../assets/Advanced JS@4x-100.jpg';
import Books from '../../assets/books.svg';

const Curriculum = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
    AOS.refresh();
  });

  const [activeCourseView, setActiveCourseView] = React.useState({
    data: true,
    algo: false,
    js: false
  });

  const courseImages = {
    data: dataImage,
    algo: algoImage,
    js: jsImage
  };

  function findCourseImage() {
    let options = ['data', 'algo', 'js'];
    for (let option of options) {
      if (activeCourseView[option] === true) {
        return courseImages[option];
      }
    }
  }

  return (
    <div>
      <img className="top-wave" src={TopWave} />
      <div className="curriculum-box">
        <a name="curriculum"></a>
        <div className="curriculum-title">
          <h2>Curriculum</h2>
          <p>
            We're on a mission to change the way you think and learn about
            computer science. Don't spend another minute looking through threads
            for solutions or watching multiple videos just to try to piece
            together complex.
          </p>
        </div>
        <div className="curr-topics">
          <div
            className="course-view"
            id={activeCourseView.data ? 'active' : null}
            data-aos="fade-right"
            onClick={() =>
              setActiveCourseView({
                data: true
              })
            }
          >
            <h5>Data Structures</h5>
            <p>
              Whether stacks, queues or lists, data science is a common topic
              for technical interviews.
            </p>
          </div>
          <div
            className="course-view"
            id={activeCourseView.algo ? 'active' : null}
            data-aos="fade-right"
            data-aos-delay="200"
            onClick={() =>
              setActiveCourseView({
                algo: true
              })
            }
          >
            <h5>Algorithms</h5>
            <p>
              Get a better grasp on the heavy lifting math equations. Our
              algorithm course will walk you through with confidence.
            </p>
          </div>
          <div
            className="course-view"
            data-aos="fade-right"
            data-aos-delay="300"
            id={activeCourseView.js ? 'active' : null}
            onClick={() =>
              setActiveCourseView({
                js: true
              })
            }
          >
            <h5>Advanced JavaScript</h5>
            <p>
              The fundamentals of JS is not the finish line. Expand the depth of
              your knowledge of the popular programming language.
            </p>
          </div>
        </div>
        <div className="curr-lottie" data-aos="fade-left">
          <img src={findCourseImage()} alt="woah" />
        </div>
      </div>
      <img className="bottom-wave" src={BottomWave} />
    </div>
  );
};

export default Curriculum;
