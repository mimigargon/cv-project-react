import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSkillHard } from "../redux/skills/skills.actions";
import { deleteSkillSoft } from "../redux/skills/skills.actions";
import { Link } from "react-router-dom";
import "./Skills.scss";

const Skills = () => {
  const { hard, soft } = useSelector((state) => state.skills);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="skills-card">
        <h2>Hard skills</h2>
        {hard.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <div>
                <button
                  onClick={() => {
                    dispatch(deleteSkillHard(item));
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
        <h2>Soft skills</h2>
        {soft.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <div>
                <button
                  onClick={() => {
                    dispatch(deleteSkillSoft(item));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
        <Link to={`/newSkillsHard`}>
          <button>Add hard skill</button>
        </Link>
        <Link to={`/newSkillsSoft`}>
          <button>Add soft skill</button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
