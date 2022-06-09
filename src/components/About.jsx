import React from 'react'

const About = ({hero}) => {
  return (
      <div>
          <div className='about card'>
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