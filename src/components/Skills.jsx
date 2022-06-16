import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSkill } from "../redux/skills/skills.actions";
import { Link } from "react-router-dom";
import "./Skills.scss";

const Skills = () => {
  const { skills } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="skills-card">
        {skills.hard.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <div>
                <button
                  onClick={() => {
                    dispatch(deleteSkill(item));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="skills-card">
        {skills.soft.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <div>
                <button
                  onClick={() => {
                    dispatch(deleteSkill(item));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <Link to={`/newSkills`}>
          <button>Add</button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
