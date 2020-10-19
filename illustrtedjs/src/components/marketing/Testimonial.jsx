import React from 'react';
import './Purchase.css';

const Testimonial = () => {
  const testimonials = [
    {
      image:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      name: 'John Doe',
      title: 'Software Engineer at Google',
      testimony: 'Cannot spell google engineer without illustrated js'
    },
    {
      image:
        'https://images.unsplash.com/photo-1525735765456-7f67273a9d93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      name: 'Jane Doe',
      title: 'Software Engineer at Instagram',
      testimony:
        'Beautiful illustrations that compliment the videos, 10/10 recommend'
    },
    {
      image:
        'https://images.unsplash.com/photo-1578635073855-a89b3dd5cc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      name: 'Mark Manning',
      title: 'Software Engineer at Etsy',
      testimony:
        'I originally purchased the one month plan, the upgrade to lifetime learner is the best value out there'
    },
    {
      image:
        'https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      name: 'Kayla Ross',
      title: 'Software Engineer at Facebook',
      testimony:
        'No one explains advanced JS concepts quite like illustrated js!'
    }
  ];
  return (
    <div>
      {testimonials.map(data => {
        return (
          <div key={data.name} className="one-testimonial">
            <div className="testimonial-title">
              <div className="testimony-headshot">
                <img src={data.image} alt={`image of ${data.name}`} />
              </div>
              <div className="testimony-name">
                <h4>{data.name}</h4>
                <h5> {data.title} </h5>
              </div>
            </div>
            <div className="testimonal-description">
              <p>{data.testimony}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonial;
