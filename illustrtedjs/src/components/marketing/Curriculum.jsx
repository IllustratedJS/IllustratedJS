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
        <p>Data Structures, Algorithms and Advanced JavaScript</p>
      </div>
      {/* <div className="curriculum1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi cum, enim perferendis inventore dolor corrupti rerum illo excepturi eius, voluptas, et harum. Iure quia tenetur commodi quo maxime consequuntur iste?</p>
      </div>
      <div className="curriculum2">
        <p>Borem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi cum, enim perferendis inventore dolor corrupti rerum illo excepturi eius, voluptas, et harum. Iure quia tenetur commodi quo maxime consequuntur iste?</p>
      </div>
      <div className="curriculum3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi cum, enim perferendis inventore dolor corrupti rerum illo excepturi eius, voluptas, et harum. Iure quia tenetur commodi quo maxime consequuntur iste?</p>
      </div> */}
    </div>
  )
}

export default Curriculum;
