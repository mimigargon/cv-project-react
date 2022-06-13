import React from 'react'

const About = ({hero}) => {
  return (
      <div>
          <div className='about card'>
          <img src={hero.image} alt="Ilustration of a portrait of myself" />
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