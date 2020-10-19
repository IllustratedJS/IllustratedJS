import React from 'react';
import './PurchaseButton.css';

const LearnButton = ({ text, id, price }) => {
  return (
    <button
      id={id}
      className="purchase-button"
      onClick={() =>
        console.log(`you will be paying $${price.price} ${price.frequency}`)
      }
    >
      Purchase Now
    </button>
  );
};

export default LearnButton;
