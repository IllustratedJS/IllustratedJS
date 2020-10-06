import React from 'react';
import CurrBlob from "../../assets/curr-blob.svg";
import Check from "../../assets/check-mark.svg";
import "./Curriculum.css";
import BottomWave from '../../assets/intro-bottom-wave.svg';


const Curriculum = () => {

  //Attempt #1 ---intersectionObserver
  // const SELECTOR = '.ds';
  // const ANIMATE = '.animate';

  // const animate = element => (
  //   element.classList.add(document.querySelector('.ds'))
  // );

  // const isAnimated = element => (
  //   element.classList.contains(document.querySelector('animate'))
  // );

  // const intersectionObserver = new IntersectionObserver((entries, observer) => {
  //   entries.forEach((entry) => {

  //     if (entry.intersectionRatio > 0) {
  //       animate(entry.target);
  //     }
  //     // observer.unobserve(entry.target); 
  //   });
  // });

  // // eachLink.forEach((link, index)
  // const elements = [].filter.call(
  //   document.querySelectorAll('.ds'),
  //   element => !isAnimated(element, document.querySelectorAll('.animate'))
  // );
  //   console.log(elements);

  //   elements.forEach((element) => intersectionObserver.observe(element));

  // Attempt #2--------------------
  // function animate(entries) {
  //   entries.forEach(function (entry) {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('animated');
  //     } else {
  //       entry.target.classList.remove('animated');
  //     }
  //   }
  //   )}


  //   function initObserver() {
  //     var observer = new IntersectionObserver(animate);
  //     var items = document.querySelectorAll('.check');
  //     for(var i in items) {
  //       if(!items.hasOwnProperty(i)) {
  //         continue;
  //       }
  //       observer.observe(items[i]);
  //     }
  //   }

  //   if (window.IntersectionObserver) {
  //     initObserver();
  //   } else {
  //     console.log('Intersection Observer not supported')
  //   };


  return(
    <div>

    <div className="curriculum-box">
      <a name="curriculum"></a>
      <div className="curriculum-title">
        <h2>Curriculum</h2>
      </div>
        <div className="ds">
            <h4>Data Structures</h4>
            <ul className="checked-curr">
              <li><img className="check" src={Check}/> &nbsp; Stacks + Queues</li>
              <li><img className="check" src={Check}/> &nbsp; Big O Notation</li>
              <li><img className="check" src={Check}/> &nbsp; Singly Linked Lists</li>
              <li><img className="check" src={Check}/> &nbsp; Doubly Linked Lists</li>
            </ul>
          </div>
          <div className="algo">
            <h4>Algorithms</h4>
            <ul className="checked-curr">
              <li><img className="check" src={Check}/> &nbsp; Stacks + Queues</li>
              <li><img className="check" src={Check}/> &nbsp; Big O Notation</li>
              <li><img className="check" src={Check}/> &nbsp; Singly Linked Lists</li>
              <li><img className="check" src={Check}/> &nbsp; Doubly Linked Lists</li>
            </ul>
          </div>
        <div className="js">
            <h4>Advanced Javascript</h4>
            <ul className="checked-curr">
              <li><img className="check" src={Check}/> &nbsp; Stacks + Queues</li>
              <li><img className="check" src={Check}/> &nbsp; Big O Notation</li>
              <li><img className="check" src={Check}/> &nbsp; Singly Linked Lists</li>
              <li><img className="check" src={Check}/> &nbsp; Doubly Linked Lists</li>
            </ul>
          
      </div>
    </div>
      <img src={BottomWave} /> 
    </div>
  )
}

export default Curriculum;
