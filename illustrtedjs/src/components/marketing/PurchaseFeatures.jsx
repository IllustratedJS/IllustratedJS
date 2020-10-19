import React from 'react';
import './Purchase.css';

const PurchaseFeatures = () => {
  const features = [
    { feature: 'Access', description: 'To all premium content' },
    { feature: 'Free', description: 'Upgrade to new content' },
    { feature: 'Invite', description: 'To exclusive discord community' },
    { feature: 'Solved', description: '100+ Problems' },
    { feature: 'Support', description: 'Email' }
  ];
  return (
    <div className="purchase-features">
      {features.map(data => {
        return (
          <div key={data.feature}>
            <p className="purchase-feature">{data.feature}</p>
            <p className="purchase-description">{data.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PurchaseFeatures;
