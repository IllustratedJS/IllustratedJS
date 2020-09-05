import React from 'react';
import CurrBlob from "../../assets/curr-blob.svg";
import "./Curriculum.css";

const Curriculum = () => {
  return(
    <div className="curriculum-box">
      <a name="curriculum"></a>
      <img className="currBlob" src={CurrBlob} />
      <div className="curriculum-title">
        <h2>Curriculum</h2>
      </div>
      <div className="curriculum-body">
        <p>Data Structures, Algorithms and Advanced JavaScript</p>
      </div>
      
    </div>
  )
}

export default Curriculum;
