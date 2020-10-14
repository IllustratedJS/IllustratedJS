import React, {useEffect} from 'react';
import Books from "../../assets/books.svg";
import "./LearningStyle.css";


const LearningStyle = () => {
  return(
    <div className="learningstyle-box">
      <img src={Books} className='books' />
      <div className="learningstyle-text">
      <h2>Your learning process, in one place.</h2>
      <p>Our entire product is focused on providing you materials that support all learning styles. Find your style, and let us lead you into Computer Science.</p>
      </div>
    </div>
  );
};

export default LearningStyle;