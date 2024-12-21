import React from 'react';


const Testimonial = ({ name, text, image }) => {
  return (
    <div className="testimonial-card">
      <img src={image} alt={`${name}`} className="testimonial-img" />
      <h3>{name}</h3>
      <p className="testimonial-text">"{text}"</p>
    </div>
  );
};

export default Testimonial;