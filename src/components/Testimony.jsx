import "./Testimony.css"
import Testimonial from "./TestimonyCard";
import testimonials from "./testdata"
import React from 'react'

const Testimony = () => {
    return (
      <div className="testimonial-list">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    );
  };

export default Testimony;