import React from 'react';
import CurrBlob from "../../assets/curr-blob.svg";

const Curriculum = () => {
  return(
    <div>
      <div className="curriculum-title">
        <img className="currBlob" src={CurrBlob} />
        <h2>Curriculum</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sapiente fuga laborum repellendus quod tempore sequi nihil aliquid veritatis distinctio consequatur eius, quis illo deleniti, adipisci, quidem ducimus dolore est?</p>
      </div>
      <div className="curriculum">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi cum, enim perferendis inventore dolor corrupti rerum illo excepturi eius, voluptas, et harum. Iure quia tenetur commodi quo maxime consequuntur iste?</p>
      </div>
    </div>
  )

}

export default Curriculum;
