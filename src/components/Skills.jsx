import React from "react";
import "./Skills.scss";

const Skills = ({ skills }) => {
  return (
    <div>
      <div className="skills-card">
        {skills.hard.map((item, index) => {
            return (
           <p key={index}>{item}</p>

            )
        })}
      </div>
      <div className="skills-card">
        {skills.soft.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })}
        </div>
    </div>
  );
};

export default Skills;
