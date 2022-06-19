import React from 'react';
import "./About.scss";

const About = ({hero}) => {
  return (
      <div>
          <img src={hero.image} alt="Ilustration of a portrait of myself" />
          <div className='about-card'>
              {hero.aboutMe.map((item) =>{
                  return (
                      <div key={JSON.stringify(item)}>
                          <p className='info'>{item.info}</p>
                      </div>
                  )
              })}
          </div>
      </div>
  )
}
export default About;