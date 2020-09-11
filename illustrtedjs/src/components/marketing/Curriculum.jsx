import React from 'react';
import CurrBlob from "../../assets/curr-blob.svg";
import Check from "../../assets/check-mark.svg";
import "./Curriculum.css";

const Curriculum = () => {
  return(
    <div className="curriculum-box">
      <a name="curriculum"></a>
      <div className="curriculum-title">
        <h2>Curriculum</h2>
      </div>
      <div className="curriculum-body">
        <div className="curr-topics">
          <h4>Data Structures</h4>
        <ul className="checked-curr">
          <li><img className="check" src={Check}/> &nbsp; Stacks + Queues</li>
          <li><img className="check" src={Check}/> &nbsp; Big O Notation</li>
          <li><img className="check" src={Check}/> &nbsp; Singly Linked Lists</li>
          <li><img className="check" src={Check}/> &nbsp; Doubly Linked Lists</li>
          <li><img className="check" src={Check}/>.</li>
        </ul>
          </div>
          <div className="curr-topics">
          <h4>Algorithms</h4>
        <ul className="checked-curr">
          <li><img className="check" src={Check}/> &nbsp; Stacks + Queues</li>
          <li><img className="check" src={Check}/> &nbsp; Big O Notation</li>
          <li><img className="check" src={Check}/> &nbsp; Singly Linked Lists</li>
          <li><img className="check" src={Check}/> &nbsp; Doubly Linked Lists</li>
          <li><img className="check" src={Check}/>.</li>
        </ul>
          </div>
        <div className="curr-topics">
          <h4>Advanced Javascript</h4>
        <ul className="checked-curr">
          <li><img className="check" src={Check}/> &nbsp; Stacks + Queues</li>
          <li><img className="check" src={Check}/> &nbsp; Big O Notation</li>
          <li><img className="check" src={Check}/> &nbsp; Singly Linked Lists</li>
          <li><img className="check" src={Check}/> &nbsp; Doubly Linked Lists</li>
          <li><img className="check" src={Check}/>.</li>
        </ul>
          </div>
      </div>
      
    </div>
  )
}

export default Curriculum;
