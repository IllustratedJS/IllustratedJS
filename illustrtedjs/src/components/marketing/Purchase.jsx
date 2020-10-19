import React, { useEffect } from 'react';
import './Purchase.css';
import Button from '../AuthButton';
import { useAuth0 } from '@auth0/auth0-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PurchaseFeatures from './PurchaseFeatures';
import PurchaseButton from '../PurchaseButton';
import LearningStyle from './LearningStyle.jsx';
import Footer from './Footer';
import './LearningStyle.css';
import Headshot from '../../assets/testimony-headshot.jpg';
import Testimonial from './Testimonial';

const Purchase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  });

  const { loginWithRedirect } = useAuth0();
  const lifetime = { price: 199, frequency: 'once' };
  const committed = { price: 149, frequency: 'yearly' };
  const prepper = { price: 29, frequency: 'monthly' };
  return (
    <div>
      <div className="purchase-page">
        <div className="plan-header">
          <h1>A Study Plan For Everyone</h1>
        </div>
        <main className="plan-container">
          <div className="plan-pricing lifetime-learner">
            <h2>Lifetime Learner</h2>
            <div className="plan-info">
              <div className="pricing">
                <h3>${lifetime.price}</h3>
                <p>lifetime access</p>
              </div>
              <div className="plan-content">
                <PurchaseFeatures />
              </div>
              <PurchaseButton
                text="Purchase Now"
                id="lifetime"
                price={lifetime}
              />
            </div>
          </div>
          <div className="plan-pricing committed-student">
            <h2>Committed Student</h2>
            <div className="plan-info">
              <div className="pricing">
                <h3>${committed.price}</h3>
                <p>per year</p>
              </div>
              <div className="plan-content">
                <PurchaseFeatures />
              </div>
              <PurchaseButton
                text="Purchase Now"
                id="committed"
                price={committed}
              />
            </div>
          </div>
          <div className="plan-pricing job-prepper">
            <h2>Job Prepper</h2>
            <div className="plan-info">
              <div className="pricing">
                <h3>${prepper.price}</h3>
                <p>per month</p>
              </div>
              <div className="plan-content">
                <PurchaseFeatures />
              </div>
              <PurchaseButton
                text="Purchase Now"
                id="prepper"
                price={prepper}
              />
            </div>
          </div>
        </main>
        <div className="testimonial-container">
          <Testimonial />
        </div>
        <div className="learning-style">
          <LearningStyle />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Purchase;
