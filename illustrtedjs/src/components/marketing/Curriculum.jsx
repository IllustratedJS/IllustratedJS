import React from 'react';
import CurrBlob from '../../assets/curr-blob.svg';
import Check from '../../assets/check-mark.svg';
import './Curriculum.css';
import BottomWave from '../../assets/intro-bottom-wave.svg';
import Books from '../../assets/books.svg';

const Curriculum = () => {
  return (
    <div>
      <div className="curriculum-box">
        <a name="curriculum"></a>
        <div className="curriculum-title">
          <h2>Curriculum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
            earum autem fuga porro ratione, impedit est ea provident maxime
            culpa officia consequuntur doloremque quibusdam maiores nam totam in
            nesciunt delectus.
          </p>
        </div>
        <img className="books" src={Books} />
        {/*         
        <div className="ds">
          <h4>Data Structures</h4>
          <ul className="checked-curr">
            <li>
              <img className="check" src={Check} /> &nbsp; Stacks + Queues
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Big O Notation
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Singly Linked Lists
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Doubly Linked Lists
            </li>
          </ul>
        </div>
        <div className="algo">
          <h4>Algorithms</h4>
          <ul className="checked-curr">
            <li className="curriculum-spaced">
              <img className="check" src={Check} /> &nbsp; Stacks + Queues
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Big O Notation
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Singly Linked Lists
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Doubly Linked Lists
            </li>
          </ul>
        </div>
        <div className="js">
          <h4>Advanced Javascript</h4>
          <ul className="checked-curr">
            <li>
              <img className="check" src={Check} /> &nbsp; Stacks + Queues
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Big O Notation
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Singly Linked Lists
            </li>
            <li>
              <img className="check" src={Check} /> &nbsp; Doubly Linked Lists
            </li>
          </ul>
        </div> */}
        <img src={BottomWave} />
      </div>
    </div>
  );
};

export default Curriculum;
